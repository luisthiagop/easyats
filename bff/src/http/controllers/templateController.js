const fs = require('fs');

const getTemplate = async (req, res, next) => {
    try{
        const file = `${__dirname}/../../templates/cv.mustache`;
        const template = fs.readFileSync(file, "utf8");
        res.send({template}).status(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = getTemplate;