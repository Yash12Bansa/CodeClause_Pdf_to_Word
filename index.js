const { PDFNet } = require('@pdftron/pdfnet-node');

async function main() {
  await PDFNet.addResourceSearchPath('./StructuredOutput.exe');

  // check if the module is available
  if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
    return;
  }

  await PDFNet.Convert.fileToWord('./yash.pdf', 'output.docx');
}

PDFNet.runWithCleanup(main, 'demo:1681468063264:7df7782203000000002e034576746fb5e65551a4ea892ab610c67d006f');