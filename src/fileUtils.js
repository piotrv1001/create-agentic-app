import path from "path";
import fs from "fs/promises";

// Helper function to copy a template file
export async function copyTemplateFile(templatePath, destPath) {
  try {
    // Read the template
    const content = await fs.readFile(
      path.join(process.cwd(), templatePath),
      "utf8"
    );
    
    // Ensure directory exists
    const dirPath = path.dirname(destPath);
    await fs.mkdir(dirPath, { recursive: true });
    
    // Write the file
    await fs.writeFile(destPath, content);
    return true;
  } catch (error) {
    console.error(`Error copying template: ${error.message}`);
    return false;
  }
}
