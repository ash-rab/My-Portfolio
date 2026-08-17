import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.join(__dirname, '..');
const sequenceDir = path.join(workspaceRoot, 'public', 'sequence');
const backupDir = path.join(workspaceRoot, 'public', 'sequence_backup');

async function main() {
  console.log('--- Sequence Image Optimization Started ---');
  
  // Check if sharp is installed, if not, install it
  try {
    await import('sharp');
  } catch (err) {
    console.log('sharp is not installed. Installing sharp dynamically...');
    execSync('npm install -D sharp', { cwd: workspaceRoot, stdio: 'inherit' });
  }

  const { default: sharp } = await import('sharp');

  if (!fs.existsSync(sequenceDir)) {
    console.error(`Directory not found: ${sequenceDir}`);
    process.exit(1);
  }

  // Create backup directory
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const files = fs.readdirSync(sequenceDir);
  const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

  console.log(`Found ${pngFiles.length} PNG frames to convert.`);

  if (pngFiles.length === 0) {
    console.log('No PNG files found to convert.');
    return;
  }

  let successCount = 0;

  for (const file of pngFiles) {
    const inputPath = path.join(sequenceDir, file);
    const outputFileName = file.replace(/\.[^/.]+$/, '.webp');
    const outputPath = path.join(sequenceDir, outputFileName);
    const backupPath = path.join(backupDir, file);

    try {
      // Convert to webp with 75% quality
      await sharp(inputPath)
        .webp({ quality: 75 })
        .toFile(outputPath);

      // Move original PNG to backup
      fs.renameSync(inputPath, backupPath);
      
      successCount++;
      if (successCount % 20 === 0 || successCount === pngFiles.length) {
        console.log(`Optimized ${successCount}/${pngFiles.length} frames...`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  console.log(`--- Finished! Successfully optimized ${successCount} frames. ---`);
  console.log(`Backup of original PNGs saved to: ${backupDir}`);
}

main().catch(err => {
  console.error('Fatal error in optimization script:', err);
  process.exit(1);
});
