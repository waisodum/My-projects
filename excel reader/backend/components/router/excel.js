const xlsx = require("xlsx");
const path = require("path");
const voters = require("../mongoose schema/excelcreds");
const dirPath = path.join(__dirname, "../../../../../Book1.xlsx");
const workbook = xlsx.readFile(`${dirPath}`);
const worksheet = {};
Object.assign(worksheet, xlsx.utils.sheet_to_json(workbook.Sheets["Sheet1"]));
module.exports = worksheet;
