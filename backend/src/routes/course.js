const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
} = require("../controllers/course");

const { checkAuth } = require("../middlewares/authentication");
const { upload } = require("../utils/multer");

/**
 * @swagger
 * /api/v1/courses:
 *   get:
 *     summary: Retrieve a list of courses
 *     description: Fetch all courses with optional search, sorting, and pagination.
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search courses by name (case-insensitive).
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort courses by price in ascending (asc) or descending (desc) order.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of courses per page (max 100).
 *       - in: query
 *         name: pageNo
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination.
 *     responses:
 *       200:
 *         description: Successfully retrieved courses.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 50
 *                 pageNo:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       courseId:
 *                         type: string
 *                         format: uuid
 *                         example: "550e8400-e29b-41d4-a716-446655440000"
 *                       courseName:
 *                         type: string
 *                         example: "Full-Stack Web Development"
 *                       description:
 *                         type: string
 *                         example: "Learn full-stack development with React and Node.js."
 *                       price:
 *                         type: number
 *                         format: decimal
 *                         example: 299.99
 *                       maxStudents:
 *                         type: integer
 *                         example: 30
 *                       currentStudents:
 *                         type: integer
 *                         example: 10
 *                       status:
 *                         type: boolean
 *                         example: true
 *                       days:
 *                         type: integer
 *                         example: 30
 *                       time:
 *                         type: string
 *                         example: "10:00 AM - 12:00 PM"
 *       400:
 *         description: Invalid query parameters.
 *       500:
 *         description: Internal server error.
 */
router.get("/", getAllCourses);

/**
 * @swagger
 * /api/v1/courses:
 *   post:
 *     summary: Create a new course
 *     description: Creates a new course with the provided details, including image upload. Requires Bearer token authentication.
 *     operationId: createCourse
 *     tags:
 *       - Courses
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the course
 *               description:
 *                 type: string
 *                 description: A description of the course
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the course
 *               maxStudents:
 *                 type: integer
 *                 description: The maximum number of students for the course
 *               status:
 *                 type: string
 *                 enum: [active, inactive]
 *                 description: The current status of the course
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The start date of the course
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The end date of the course
 *               time:
 *                 type: string
 *                 description: The schedule or time for the course
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file for the course
 *     responses:
 *       201:
 *         description: Successfully created the course
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *                       format: float
 *                     maxStudents:
 *                       type: integer
 *                     status:
 *                       type: string
 *                     startDate:
 *                       type: string
 *                       format: date
 *                     endDate:
 *                       type: string
 *                       format: date
 *                     time:
 *                       type: string
 *                     img:
 *                       type: string
 *       400:
 *         description: Bad request, possibly missing required fields
 *       401:
 *         description: Unauthorized, invalid or missing Bearer token
 *       500:
 *         description: Internal server error
 *     consumes:
 *       - multipart/form-data
 */
router.post("/", checkAuth, upload.single("image"), createCourse);
/**
 * @swagger
 * /api/v1/courses/{id}:
 *   get:
 *     summary: Get course by ID
 *     description: Retrieves details of a specific course by its ID
 *     tags:
 *       - Courses
 *     operationId: getCourseById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the course to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved the course details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *       404:
 *         description: Course not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Course not found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.get("/:id", getCourseById);
/**
 * @swagger
 * /api/v1/courses/{id}:
 *   put:
 *     summary: Update course by ID
 *     description: Updates the details of a specific course, including optional image updates.
 *     tags:
 *       - Courses
 *     operationId: updateCourseById
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the course to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               courseName:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               maxStudents:
 *                 type: integer
 *               currentStudents:
 *                 type: integer
 *               days:
 *                 type: string
 *               time:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Successfully updated the course details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     courseName:
 *                       type: string
 *                     description:
 *                       type: string
 *                     price:
 *                       type: number
 *                     maxStudents:
 *                       type: integer
 *                     currentStudents:
 *                       type: integer
 *                     days:
 *                       type: string
 *                     time:
 *                       type: string
 *                     img:
 *                       type: string
 *                       description: Image filename
 *       400:
 *         description: Invalid request parameters
 *       404:
 *         description: Course not found
 *       500:
 *         description: Server error
 */
router.put("/:id", checkAuth, upload.single("image"), updateCourseById);
/**
 * @swagger
 * /api/v1/courses/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     description: Deletes a specific course by its ID and removes the associated image from the server
 *     tags:
 *       - Courses
 *     operationId: deleteCourseById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the course to delete
 *         schema:
 *           type: integer
 *     security:
 *       - bearerAuth: []  # This requires the Bearer token to be passed
 *     responses:
 *       200:
 *         description: Successfully deleted the course
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Course deleted"
 *       404:
 *         description: Course not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Course not found"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
router.delete("/:id", checkAuth, deleteCourseById);

module.exports = router;
