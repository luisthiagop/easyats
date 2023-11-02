const fs = require('fs');
const mustache = require('mustache');
const puppeteer = require('puppeteer');

const generatePDF = async (data) => {
    const template = fs.readFileSync("src/templates/cv.mustache", "utf8");
    const html = mustache.render(template, data);
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
  
    await page.pdf({ path: "tmp/output.pdf", format: "A4" });
  
    await browser.close();
}

module.exports = generatePDF;