const fs = require("fs");

fs.writeFile("student.txt", "Welcome to Node.js!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }

  console.log("File written successfully!");

  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    console.log("File content:", data);
  });
});
