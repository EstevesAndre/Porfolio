import { existsSync } from "node:fs";
import { join } from "node:path";

/** Returns the path if the file exists in /public, so an image appears as soon as it's added. */
export const publicAsset = (src: string | undefined) =>
  src && existsSync(join(process.cwd(), "public", src)) ? src : undefined;
