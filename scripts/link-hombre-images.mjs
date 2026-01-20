import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.resolve("public/images/perfumes/hombre");
const PRODUCTS_JSON = path.resolve("src/data/products.json");
const OUT_REPORT = path.resolve("scripts/hombre-image-report.json");

// Ponlo en true primero para ver el reporte sin modificar el JSON
const DRY_RUN = true;

function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/['’`"]/g, "") // quita comillas
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function slugify(str) {
  return normalize(str).replace(/\s+/g, "-");
}

function listPngFilenames(dir) {
  if (!fs.existsSync(dir)) throw new Error(`No existe la carpeta: ${dir}`);
  return fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".png"));
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function bestSoftMatch(targetNorm, candidates) {
  // Match simple: exact / includes / max overlap de tokens
  let best = null;

  const tTokens = new Set(targetNorm.split(" ").filter(Boolean));

  for (const f of candidates) {
    const base = f.replace(/\.png$/i, "");
    const baseNorm = normalize(base);

    // 1) exact
    if (baseNorm === targetNorm) return { file: f, score: 1 };

    // 2) includes
    if (baseNorm.includes(targetNorm) || targetNorm.includes(baseNorm)) {
      const score = 0.9;
      if (!best || score > best.score) best = { file: f, score };
      continue;
    }

    // 3) overlap tokens
    const bTokens = new Set(baseNorm.split(" ").filter(Boolean));
    let overlap = 0;
    for (const tok of tTokens) if (bTokens.has(tok)) overlap++;

    const denom = Math.max(tTokens.size, bTokens.size) || 1;
    const score = overlap / denom;

    if (!best || score > best.score) best = { file: f, score };
  }

  return best;
}

function main() {
  const products = readJson(PRODUCTS_JSON);

  const pngFiles = listPngFilenames(IMAGES_DIR);
  const pngSet = new Set(pngFiles.map((f) => f.toLowerCase()));

  const report = [];
  let updated = 0;
  let missing = 0;

  for (const p of products) {
    if (p.gender !== "hombre") continue;

    const candidates = [];

    // 1) id.png (ideal)
    if (p.id) candidates.push(`${p.id}.png`);

    // 2) slug(name).png
    if (p.name) candidates.push(`${slugify(p.name)}.png`);

    // 3) slug(brand + name).png
    if (p.brand && p.name) candidates.push(`${slugify(`${p.brand} ${p.name}`)}.png`);

    // Intento directo por candidatos
    let chosen = null;
    for (const c of candidates) {
      if (pngSet.has(c.toLowerCase())) {
        chosen = c;
        break;
      }
    }

    // 4) Soft match por nombre
    let soft = null;
    if (!chosen) {
      const target = normalize(`${p.brand || ""} ${p.name || ""}`.trim());
      soft = bestSoftMatch(target, pngFiles);
      // umbral (ajustable). 0.55 suele funcionar bien con nombres parecidos.
      if (soft && soft.score >= 0.55) chosen = soft.file;
    }

    if (chosen) {
      const newPath = `/images/perfumes/hombre/${chosen}`;

      report.push({
        id: p.id,
        brand: p.brand,
        name: p.name,
        oldImage: p.image,
        newImage: newPath,
        method: candidates.includes(chosen) ? "direct" : "soft",
        softScore: soft ? soft.score : null,
      });

      if (!DRY_RUN) {
        p.image = newPath;
      }
      updated++;
    } else {
      report.push({
        id: p.id,
        brand: p.brand,
        name: p.name,
        oldImage: p.image,
        newImage: null,
        method: "missing",
        softScore: soft ? soft.score : null,
      });
      missing++;
    }
  }

  // Guardar reporte
  fs.mkdirSync(path.dirname(OUT_REPORT), { recursive: true });
  writeJson(OUT_REPORT, report);

  if (!DRY_RUN) {
    writeJson(PRODUCTS_JSON, products);
  }

  console.log(`\n✅ HOMBRE: asignadas ${updated} imágenes`);
  console.log(`❌ HOMBRE: sin imagen ${missing}`);
  console.log(`📝 Reporte: ${OUT_REPORT}`);
  console.log(`DRY_RUN=${DRY_RUN} (ponlo en false para aplicar cambios)\n`);

  // Muestra una mini lista de faltantes
  if (missing > 0) {
    const misses = report.filter((r) => r.method === "missing").slice(0, 15);
    console.log("Primeros faltantes:");
    for (const r of misses) {
      console.log(`- ${r.brand} ${r.name} (id: ${r.id})`);
    }
    console.log("");
  }
}

main();
