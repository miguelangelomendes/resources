"use server";
import en from "@/utils/Locales/en";
import fs from "fs";
import os from "os";

export async function writeEnvs(newEnv: any) {
  try {
    console.log(newEnv);

    // write everything back to the file system
    fs.writeFileSync(
      ".env",
      Object.entries(newEnv)
        .map(([key, value]) => `${key}=${value}`)
        .join(os.EOL)
    );
    return;
  } catch (error) {
    console.error(error);
    return;
  }
}
