/**
 Code pour télécharger le livre "Alice in Wonderland"
 depuis le projet Gutenberg
 */
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';
import https from 'node:https';

const __dirname = dirname(fileURLToPath(import.meta.url));

const bookPath = `${__dirname}/alice_book.txt`;
const bookURL = "https://www.gutenberg.org/files/11/11-0.txt";

function downloadBook(filePath = bookPath, url = bookURL) {
  try {
    if (!fs.existsSync(filePath)) {
      const file = fs.createWriteStream(filePath);
      https.get(url,
        (response) => {
          response.pipe(file);
        });
    }
    return filePath;
  } catch (err) {
    console.error(err);
  }
}

downloadBook();

