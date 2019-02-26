const path = require("path");
const fs = require("fs");
const log = console.log;

const ensureDirectoryPath = filePath => {
  let dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryPath(dirname);
  fs.mkdirSync(dirname);
};

const getJsFiles = (dir, result = []) => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.resolve(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        return getJsFiles(filePath, result);
      }

      if (file.indexOf(".js") > 0) {
        result.push(filePath);
      }
    });

    return result;
  } else {
    log(`WARNING: Directory does not exists: ${dir}`);
  }
};

const requireUncached = filePath => {
  if (filePath) {
    let resolvedPath = path.resolve(filePath);
    if (fs.existsSync(resolvedPath)) {
      delete require.cache[require.resolve(resolvedPath)];
      return require(resolvedPath);
    } else {
      log(`WARNING: File not found: ${filePath}`);
    }
  }
};

const isJson = (item) => {
  item = typeof item !== "string"
    ? JSON.stringify(item)
    : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === "object" && item !== null) {
    return true;
  }

  return false;
}

module.exports = {
  ensureDirectoryPath,
  getJsFiles,
  requireUncached,
  isJson
};
