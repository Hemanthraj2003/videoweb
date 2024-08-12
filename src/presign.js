import AWS from "aws-sdk";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
const urlCollectRef = collection(db, "urls");

const BUCKET_NAME = "qplayer";

const s3 = new AWS.S3({
  endpoint: "https://41b7cf9f61d7b1b14f6172fbd2e96b42.r2.cloudflarestorage.com",
  accessKeyId: "fbd74555ea216955ef708ddc4a065dbe",
  secretAccessKey:
    "57968382efec679da24f858ebea4b25b5560c871e3b048b59b3a80c329e296c2",
  region: "auto",
  signatureVersion: "v4",
});
const handleuploadSuccess = async (name, url) => {
  const rawData = { title: name, url: url };
  console.log(rawData);
  const docRef = await addDoc(urlCollectRef, rawData);
  console.log("Document added with ID: ", docRef.id);
};
const generatePreSIgnedUrl = (key, contentType) => {
  const paramas = {
    Bucket: BUCKET_NAME,
    Key: key,
    Expires: 60 * 60 * 5,
    ContentType: contentType,
  };
  const url = s3.getSignedUrlPromise("putObject", paramas);
  console.log(url);

  return url;
};

export const generateDownloadUrl = async (path) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: path,
    Expires: 60 * 60 * 24 * 7,
  };
  s3.getSignedUrl("getObject", params, (err, url) => {
    if (err) {
      console.error("Error generating pre-signed URL", err);
    } else {
      const handle = async () => {
        await handleuploadSuccess(path, url);
      };
      handle();
    }
  });
};

export default generatePreSIgnedUrl;
