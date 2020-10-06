import React from 'react'
import Button from './Button';

const DownloadCV = () => {
    const downloadCV = () => {
        console.log("Downloading...");
        fetch("/docs/cv.pdf")
          .then((resp) => resp.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = "Ebin Xavier CV.pdf";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(() => console.log("Error in downloading CV!"));
      };
      return (
        <Button onClick={downloadCV}>DOWNLOAD CV</Button>
    )
}

export default DownloadCV
