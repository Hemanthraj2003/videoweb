const ProcessData = async (response) => {
  const processedData = {};
  let audioCount = 1;
  let subCount = 1;

  response.uploadedFiles.forEach((file) => {
    const extension = file.split(".").pop(); // Get file extension

    switch (extension) {
      case "mp4":
        processedData.video = file;
        break;
      case "aac":
        processedData[`audio${audioCount.toString().padStart(2, "0")}`] = file;
        audioCount++;
        break;
      case "srt":
        processedData[`sub${subCount.toString().padStart(2, "0")}`] = file;
        subCount++;
        break;
      default:
        // Handle other file types if needed
        break;
    }
  });

  return processedData;
};
export default ProcessData;
