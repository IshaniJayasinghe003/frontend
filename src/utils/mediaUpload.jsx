const url = "https://pbwpvdsxnkfkvpoaejgy.supabase.co";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBid3B2ZHN4bmtma3Zwb2Flamd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNjg1MzQsImV4cCI6MjA3MDY0NDUzNH0.XHi4VN9H_AtxN893gwHfE2qjvJL-3N9JM939S8BO0D8";

import { createClient } from "@supabase/supabase-js";

const superbase = createClient(url, key);

export default function uploadFile(file) {
  const promise = new Promise((resolve, reject) => {
    if (file == null) {
      reject("Please select a file to upload");
      return;
    }

    const timeStamp = new Date().getTime(); 
    const fileName = timeStamp + "-" + file.name;

    superbase.storage
      .from("images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then(() => {
        const publicUrl = superbase.storage
          .from("images")
          .getPublicUrl(fileName).data.publicUrl;
          resolve(publicUrl);
      })
      .catch((error) => {
       reject("Failed to upload file");
      });
  });

  return promise;
}
