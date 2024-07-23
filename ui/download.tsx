"use client";
import * as React from "react";

function DownloadFolder() {
  const [downloading, setDownloading] = React.useState(false);

  const handleDownloadFolder = async () => {
    setDownloading(true);
    const res = await fetch(`/api/download?folder=ui/Dropdown&folder=utils/countries.ts`);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Dropdown.zip");
    document.body.appendChild(link);
    link.click();
    link.remove();
    setDownloading(false);
  };

  return <button onClick={handleDownloadFolder}>{downloading ? "Downloading..." : "Download"}</button>;
}

export default DownloadFolder;
