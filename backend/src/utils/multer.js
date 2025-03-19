const multer = require("multer");
const path = require("path");
const fs = require("fs");
const slugify = require("slugify");

const ensureUploadDir = async (dir) => {
  try {
    await fs.promises.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Failed to create upload directory: ${error.message}`);
    throw error;
  }
};
const sanitizeFileName = (filename) => {
  return slugify(filename, { lower: true, strict: true });
};

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    let subfolder = "default";
    if (req.baseUrl.includes("courses")) {
      subfolder = "courses";
    }

    const uploadDir = path.join(__dirname, `../../uploads/${subfolder}`);

    try {
      await ensureUploadDir(uploadDir);
      cb(null, uploadDir);
    } catch (error) {
      cb(new Error("Failed to create upload directory."), null);
    }
  },

  filename: (req, file, cb) => {
    try {
      const ext = path.extname(file.originalname);
      const sanitizedFileName = sanitizeFileName(
        path.parse(file.originalname).name
      );
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const finalFileName = `${sanitizedFileName}-${uniqueSuffix}${ext}`;
      cb(null, finalFileName);
    } catch (error) {
      cb(new Error("Error while generating the filename."), null);
    }
  },
});

const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  // Check if the file extension is allowed
  if (!allowedExtensions.includes(ext)) {
    return cb(new Error("Invalid file type! Only images are allowed."), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB limit for file size
  },
  fileFilter,
});

module.exports = { upload };
