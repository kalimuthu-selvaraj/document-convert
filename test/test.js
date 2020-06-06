const document = require("../convert");

const options = {
  libreofficeBin: "C:\\Program Files\\LibreOffice\\program\\soffice.exe",
  sourceFile: "C:\\convert-pdf-img\\metro_style_powerpoint_Dark.pptx",
  outputDir: "C:\\convert-pdf-img\\",
  img: true,
  imgExt: "jpg",
  reSize: 800,
  density: 120,
};

document.convert(options, (err, res) => {
  if (err) console.log(err.message);
  console.log(res);
});
