import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.resolve("public/images/perfumes/hombre");
const OUT_FILE = path.resolve("scripts/hombre-images-list.json");

function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ No existe la carpeta: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(IMAGES_DIR)
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b));

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(files, null, 2) + "\n", "utf8");

  console.log(`✅ Total archivos: ${files.length}`);
  console.log(`📝 Guardado en: ${OUT_FILE}\n`);

  // imprime lista (para copiar)
  for (const f of files) console.log(f);
}

main();
