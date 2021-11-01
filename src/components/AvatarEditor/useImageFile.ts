import { useEffect, useState } from "react";

const useImageFile = (url: string) => {
  const [imageFile, setImageFile] = useState<File>(new File([], "empty"));

  useEffect(() => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => new File([blob], "avatar.png"))
      .then((file) => setImageFile(file));
  }, [url]);

  return imageFile;
};

export default useImageFile;
