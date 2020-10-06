import React, { useState } from "react";
import { textColorPrimary } from "../constants";
import { isMobile } from "react-device-detect";
import DownloadCV from "../components/DownloadCV";

const Resume = () => {
  const [docLoaded, setDocLoaded] = useState("loading");
  return (
    <div style={{ textAlign: "center" }}>
      {docLoaded === "loading" && (
        <div style={{ padding: "200px 0px" }}>
          <div className="loader" />
          <div style={{ color: textColorPrimary }}>
            <p>Fetching Latest Document</p>
            <p>OR</p>
          </div>
          <DownloadCV />
        </div>
      )}
      {!isMobile ? (
        <iframe
          onLoad={() => setDocLoaded("loaded")}
          onError={() => setDocLoaded("error")}
          style={{
            visibility: docLoaded === "loaded" ? "unset" : "hidden",
            height: docLoaded === "loading" ? "0vh" : "100vh",
            width: "100vw",
          }}
          src="docs/cv.pdf"
          title="resume"
        ></iframe>
      ) : (
        <iframe
          onLoad={() => setDocLoaded("loaded")}
          onError={() => setDocLoaded("error")}
          style={{
            visibility: docLoaded === "loaded" ? "unset" : "hidden",
            height: docLoaded === "loading" ? "0vh" : "100vh",
            width: "100vw",
          }}
          title="resume"
          src="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1UX-oC3vYLodRK9SfuSIu6sAvJ8D6u-M9dpL9wH9JibU/export?format=pdf&embedded=true"
          // src="https://docs.google.com/document/d/e/2PACX-1vQvhAtr_u3zyl9n1oxHBbnt3dqyF8S2PlFSEvbyZmH1BigN_q60oUdlw9fUEgOxKmLPue7QXMZZcNwP/pub?embedded=true"
        ></iframe>
      )}
    </div>
  );
};

export default Resume;
