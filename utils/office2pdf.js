const toPdf = require('office-to-pdf')
const fs = require('fs')
const wordtoPdf = () => {
  let wordFile = './files/' + "test.docx";
  console.log(53,wordFile)
  return fs.readFile(wordFile, function(err, result){
    console.log(55,result)
    if(err){
      console.log(err);
    }else{
      toPdf(result).then(
        (pdfBuffer) => {
          console.log(60,pdfBuffer)
          fs.writeFileSync("./files/test.pdf", pdfBuffer);
          console.log('成功生成PDF文件')
          // sendFileToServer('./pdf/test.pdf' , '/sftp/pdf/test.pdf')
        }, (err) => {
          console.log(66,err);
        }
      )
    }
  })
}
wordtoPdf()