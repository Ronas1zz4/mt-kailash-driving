const Handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");

const compileHandlebars = (data) => {
  const templatePath = path.resolve(__dirname, "../template/emailTemplate.hbs");
  const templateSource = fs.readFileSync(templatePath, "utf-8");
  const template = Handlebars.compile(templateSource);
  return template(data);
};

module.exports = { compileHandlebars };
