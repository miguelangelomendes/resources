import path from "path";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export const POST = async (req: NextRequest) => {
  try {
    if (!req.body) {
      return NextResponse.json({ message: "Please provide file name" }, { status: 400 });
    }

    const data = JSON.parse(await streamToString(req.body));
    const fileName = data?.fileName || "archive.zip";
    const fullPath = path.join(process.cwd(), "./public/downloads/", fileName);
    const zipContent = fs.readFileSync(fullPath);
    console.log("zipContent", zipContent);

    return new NextResponse(zipContent, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename=${fileName}`,
        "Content-Type": "application/zip",
      },
    });
  } catch (error) {
    console.log("Error creating zip file", error);
    return NextResponse.json({ message: "Error creating zip file", error }, { status: 500 });
  }
};
