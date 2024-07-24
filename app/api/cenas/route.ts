import path from "path";
import fs from "fs";
import { NextRequest, NextResponse, userAgent } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const all = userAgent(req);
    return NextResponse.json(all, { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.log("Error creating zip file", error);
    return NextResponse.json({ message: "Error creating zip file", error }, { status: 500 });
  }
};
