const fs = require('fs').promises;
const path = require('path');

async function copyFile(source, destination) {
	try {
		await fs.copyFile(source, destination);
		console.log(`Copied ${source} to ${destination}`);
	} catch (err) {
		console.error(`Failed to copy ${source}: ${err}`);
	}
}

async function copyDirectory(source, destination) {
	try {
		await fs.mkdir(destination, { recursive: true });
		const entries = await fs.readdir(source, { withFileTypes: true });

		for (const entry of entries) {
			const srcPath = path.join(source, entry.name);
			const destPath = path.join(destination, entry.name);

			entry.isDirectory()
				? await copyDirectory(srcPath, destPath)
				: await copyFile(srcPath, destPath);
		}
	} catch (err) {
		console.error(`Failed to copy directory ${source} to ${destination}: ${err}`);
	}
}

/**
 * Main function that copies the necessary files to the build directory.
 * include the package.json, next.config.js, and the dist and public directories.
 */
async function main() {
	// Adjust these paths as necessary
	await copyDirectory(path.resolve(__dirname, 'build'), path.resolve(__dirname, '..', 'app', 'build'));
	await copyDirectory(path.resolve(__dirname, 'public'), path.resolve(__dirname, '..', 'app', 'public'));
	await copyFile(path.resolve(__dirname, 'package.json'), path.resolve(__dirname, '..', 'app', 'package.json'));

	// Navigate to build directory and install dependencies
	process.chdir(path.resolve(__dirname, '..', 'app'));
	require('child_process').execSync('npm install', { stdio: 'inherit' });
}

main();
