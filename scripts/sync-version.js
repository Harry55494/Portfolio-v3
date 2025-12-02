import { readFileSync, writeFileSync } from "fs";
import { version_number } from "../src/lib/version_number.js";

// Update package.json
const pkg = JSON.parse(readFileSync("./package.json", "utf8"));
pkg.version = version_number;
writeFileSync("./package.json", JSON.stringify(pkg, null, 4));

console.log(`Version synced to ${version_number}`);
