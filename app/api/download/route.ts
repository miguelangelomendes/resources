import path from "path";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import JSZip from "jszip";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = await req.nextUrl.searchParams;
    const folders = searchParams.getAll("folder");
    if (folders.length === 0) {
      return NextResponse.json({ message: "Please provide folder names" }, { status: 400 });
    }

    const zip = new JSZip();

    const scanFolder = async (folderPath: string, parentFolder: string = "", original: string = "") => {
      if (!fs.existsSync(folderPath)) {
        return;
      }
      if (!fs.lstatSync(folderPath).isDirectory()) {
        const fileContent = fs.readFileSync(folderPath);
        return zip.file(original, fileContent);
      }
      const files = fs.readdirSync(folderPath);
      for (const fileName of files) {
        const filePath = path.join(folderPath, fileName);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          const newParentFolder = path.join(parentFolder, fileName);
          await scanFolder(filePath, newParentFolder, original);
        } else {
          const fileContent = fs.readFileSync(filePath);
          const relativeFilePath = path.join(parentFolder, fileName);
          const zipFilePath = path.join(original, relativeFilePath);
          zip.file(zipFilePath, fileContent);
        }
      }
    };

    for (const folder of folders) {
      const componentPath = path.join(process.cwd(), "/", folder);
      await scanFolder(componentPath, "", folder);
    }

    const zipContent = await zip.generateAsync({ type: "nodebuffer" });

    return new NextResponse(zipContent, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename=archive.zip`,
        "Content-Type": "application/zip",
      },
    });
  } catch (error) {
    console.log("Error creating zip file", error);
    return NextResponse.json({ message: "Error creating zip file", error }, { status: 500 });
  }
};
