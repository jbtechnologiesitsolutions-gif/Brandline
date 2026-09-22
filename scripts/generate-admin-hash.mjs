import crypto from "node:crypto";

const password = process.argv[2];
if (!password || password.length < 8) {
  console.error('Usage: node scripts/generate-admin-hash.mjs "password-at-least-8-chars"');
  process.exit(1);
}
const salt = crypto.randomBytes(16);
const derived = crypto.pbkdf2Sync(password, salt, 310000, 32, "sha256");
console.log(Buffer.concat([salt, derived]).toString("base64"));
