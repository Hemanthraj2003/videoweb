import React, { useState } from "react";
import axios from "axios";
import generatePreSIgnedUrl, { generateDownloadUrl } from "./presign";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register FilePond plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async () => {
    setIsUploading(true); // Disable submit button during upload

    for (let i = 0; i < files.length; i++) {
      const file = files[i].file; // Access the file object
      console.log(file.name, file.type);

      try {
        const url = await generatePreSIgnedUrl(file.name, file.type);
        console.log(file.type);

        const response = await axios.put(url, file, {
          header: {
            "Content-Type": file.type,
          },
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            files[i].setMetadata("progress", progress);
          },
        });

        if (response.status === 200) {
          await generateDownloadUrl(file.name);
          console.log(`File ${file.name} uploaded successfully.`);
        } else {
          console.log(`Upload of file ${file.name} failed.`);
        }
      } catch (error) {
        console.error(`Error uploading file ${file.name}:`, error);
      }
    }

    setIsUploading(false); // Re-enable submit button
    setFiles([]); // Clear FilePond files
    alert("All files uploaded successfully!"); // Alert success
  };

  return (
    <div>
      <h1>Upload Files to Cloudflare R2 using Pre-signed URL</h1>
      <FilePond
        files={files}
        allowMultiple={true}
        onupdatefiles={setFiles}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        onprocessfileprogress={(file, progress) => {
          // Update progress metadata to reflect the upload progress
          file.setMetadata("progress", progress * 100);
        }}
        onprocessfiles={() => {
          setFiles([]); // Clear files on successful upload
        }}
      />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "Uploading..." : "Submit"}
      </button>
    </div>
  );
};

export default Upload;
