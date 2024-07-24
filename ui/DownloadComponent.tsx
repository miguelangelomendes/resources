"use client";
import { useState } from "react";

interface Props {
  fileName: string;
}

export default function DownloadComponent({ fileName }: Props) {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadFolder = async () => {
    setDownloading(true);
    const res = await fetch(`/api/component`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName,
      }),
    });
    // const res = await fetch(`/api/download?folder=ui/Dropdown&folder=utils/countries.ts`);
    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    setDownloading(false);
  };

  return (
    <button
      className="clickable rounded-md bg-secondary-500 px-4 py-2 hover:bg-secondary-400"
      onClick={handleDownloadFolder}
    >
      {downloading ? "Downloading..." : "Download"}
    </button>
  );
}
