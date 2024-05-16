const fs = require('fs').promises;
const path = require('path');
/**
 * this function deletes the folder and all its contents recursively.
 * currently we used it to delete the build folder which is under the parent directory.
 * @param {*} directoryPath
 */

async function deleteFolderRecursive(directoryPath) {
	try {
		const files = await fs.readdir(directoryPath);
		for (const file of files) {
			const curPath = path.join(directoryPath, file);
			const stat = await fs.lstat(curPath);
			if (stat.isDirectory()) {
				// Recursive call
				await deleteFolderRecursive(curPath);
			} else {
				// Delete file
				await fs.unlink(curPath);
			}
		}
		await fs.rmdir(directoryPath);
		console.log(`Directory ${directoryPath} is deleted successfully.`);
	} catch (err) {
		console.error(`Error while deleting directory ${directoryPath}: ${err}`);
	}
}

// Update the path as necessary; assuming the app directory is one level up
const buildDir = path.resolve(__dirname, '..', 'app');
deleteFolderRecursive(buildDir);
