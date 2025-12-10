import { createHash } from "crypto";

export function generateETag(body: string): string {
  const hash = createHash("md5").update(body, "utf8").digest("hex");
  return `"${hash}"`;
}
