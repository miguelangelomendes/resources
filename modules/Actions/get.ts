"use server";
import fs from "fs";
import os from "os";

export async function getEnvs() {
  try {
    // read file from hdd & split if from a linebreak to a array
    const ENV_VARS = fs.readFileSync(".env", "utf8").split(os.EOL);

    // replace the key/value with the new value
    const newEnv = ENV_VARS.map((env) => env.split("="));

    // console.log(newEnv);
    const json = newEnv.reduce((acc: any, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    console.log(json);

    // write everything back to the file system
    // fs.writeFileSync("./.env", ENV_VARS.join(os.EOL));
    return json;
  } catch (error) {
    console.error(error);
    return;
  }
}
