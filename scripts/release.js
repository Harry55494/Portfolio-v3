import { execSync } from "child_process";
import { version_number } from "../src/lib/version_number.js";

const tag = `v${version_number}`;

// Create tag
execSync(`git tag ${tag}`);
console.log(`✓ Created tag ${tag}`);

// Push with tags
execSync(`git push gitea development --tags`);
console.log("✓ Pushed to development with tags");
