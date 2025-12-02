import { execSync } from "child_process";
import { version_number } from "../src/lib/version_number.js";

const tag = `v${version_number}`;

// Create tag
execSync(`git tag ${tag}`);
console.log(`✓ Created tag ${tag}`);

// Push with tags
execSync(`git push gitea main --tags`);
console.log("✓ Pushed to main with tags");
