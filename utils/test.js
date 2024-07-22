const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Mock function to get component dependencies (replace with actual logic)
function getComponentDependencies(componentName) {
  const dependencies = {
    Dropdown: ["Option", "Menu"],
    Option: ["Icon"],
    Menu: ["MenuItem"],
    MenuItem: [],
    Icon: [],
  };
  return dependencies[componentName] || [];
}

// Function to download a file
async function downloadFile(url, outputPath) {
  const response = await axios.get(url, { responseType: "stream" });
  const writer = fs.createWriteStream(outputPath);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

// Recursive function to fetch and download dependencies
async function fetchDependenciesRecursively(componentName, baseUrl, downloaded = new Set()) {
  if (downloaded.has(componentName)) return;
  downloaded.add(componentName);

  const componentUrl = `${baseUrl}/${componentName}.tsx`;
  const componentPath = path.join(__dirname, `${componentName}.tsx`);
  await downloadFile(componentUrl, componentPath);
  console.log("Component downloaded:", componentPath);

  const dependencies = getComponentDependencies(componentName);
  for (const dependency of dependencies) {
    await fetchDependenciesRecursively(dependency, baseUrl, downloaded);
  }
}

// Function to download Dropdown component and its dependencies
async function downloadComponentAndDependencies() {
  const baseUrl = "https://example.com/path/to/components";
  try {
    await fetchDependenciesRecursively("Dropdown", baseUrl);
  } catch (error) {
    console.error("Error downloading files:", error);
  }
}

// Execute the download function
// downloadComponentAndDependencies();
