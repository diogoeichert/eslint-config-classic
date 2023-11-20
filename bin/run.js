#!/usr/bin/env node

"use strict";

const { execSync } = require("child_process");

try {
	execSync("eslint . --fix", { stdio: "inherit" });

	console.log("ESLint has run successfully.");
} catch (error) {
	// Handle errors gracefully
	console.error("Error running ESLint:", error.message);

	process.exitCode = 1; // Set a non-zero exit code to indicate failure
}
