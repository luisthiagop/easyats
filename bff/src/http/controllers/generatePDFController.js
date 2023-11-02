const generatePDF = require("../../usecases/generatePDF");

const generatePDFController = async (req, res, next) => {
    try{
        await generatePDF(req.body);

        const file = `${__dirname}/../../../tmp/output.pdf`;
        res.download(file); // Envia o arquivo para download
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = generatePDFController;