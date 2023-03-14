function extractFile(line){
    let fileNameAndExtension = line.substring(line.lastIndexOf("\\") + 1);
    let fileName = fileNameAndExtension.substring(0,fileNameAndExtension.lastIndexOf("."));
    let extension = fileNameAndExtension.substring(fileNameAndExtension.lastIndexOf(".") + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');