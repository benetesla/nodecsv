let Reader = require('./Reader');
let Processor = require('./Processor');
let Table = require('./Table');
let htmlParser = require('./htmlParser');
let Writer = require('./FileWriter');
let PDFWriter = require('./PDFWriter');

let leitor = new Reader();
let escritor = new Writer();


async function main() {
    let datas = await leitor.Read('./usuarios.csv');
    let dados = Processor.Process(datas);
    let usuarios = new Table(dados);
    let html = await htmlParser.Parse(usuarios);

    escritor.Write(Date.now() + '.html', html);
    PDFWriter.WritePDF(Date.now() + '.pdf', html);
}
main();