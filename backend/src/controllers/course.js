const { Op, where } = require("sequelize");
const path = require("path");
const fs = require("fs");
const { Course, sequelize } = require("../models");
const { v4: uuidv4 } = require("uuid");
const createCourse = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      maxStudents,
      status,
      startDate,
      endDate,
      time,
    } = req.body;
    const img = req.file.filename;
    const course = await Course.create({
      number: uuidv4(),
      name,
      description,
      price,
      maxStudents,
      status,
      startDate,
      endDate,
      img,
      time,
    });
    return res.status(201).json({ success: true, data: course });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const { search, sort, limit, pageNo } = req.query;
    const validPageNo = Math.max(parseInt(pageNo?.toString()) || 1, 1);
    const validLimit = Math.min(Math.max(parseInt(limit) || 10, 1), 100);
    const offset = (validPageNo - 1) * validLimit;
    let where = {};
    if (search) where.name = { [Op.like]: `%${search}%` };
    const order = sort === "asc" ? [["price", "ASC"]] : [["price", "DESC"]];
    const [courses, count] = await Promise.all([
      Course.findAll({
        where,
        offset,
        limit: validLimit,
        order,
      }),
      Course.count({
        where,
      }),
    ]);

    return res.status(200).json({
      success: true,
      data: courses,
      count,
      search,
      sort,
      limit: validLimit,
      pageNo: validPageNo,
      totalPages: Math.ceil(count / validLimit),
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    return res.status(200).json({ success: true, data: course });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateCourseById = async (req, res) => {
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    let img = course.img;
    const {
      name,
      description,
      price,
      maxStudents,
      status,
      startDate,
      endDate,
      time,
    } = req.body;
    if (req.file) {
      img = req.file.filename;
    }
    await Course.update(
      {
        name,
        description,
        price,
        maxStudents,
        status,
        startDate,
        endDate,
        time,
        img,
      },
      { where: { id }, transaction }
    );
    if (req.file && course.img) {
      const oldFilePath = path.join(
        __dirname,
        `../../uploads/courses/${course.img}`
      );
      if (fs.existsSync(oldFilePath)) {
        await fs.promises.unlink(oldFilePath);
      }
    }
    await transaction.commit();
    return res
      .status(200)
      .json({ success: true, message: "Course Updated Successfully" });
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ success: false, message: error.message });
  }
};

const deleteCourseById = async (req, res) => {
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const { id } = req.params;
    const course = await Course.findByPk(id);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    const filePath = path.join(
      __dirname,
      `../../uploads/courses/${course.img}`
    );

    await Course.destroy({ where: { id }, transaction });
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
    }
    await transaction.commit();
    return res.status(200).json({ success: true, message: "Course deleted" });
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
