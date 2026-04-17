import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const requiredFiles = [
  "app/page.tsx",
  "app/layout.tsx",
  "app/globals.css",
  "app/favicon.ico",
  "package.json",
  "tsconfig.json",
  "eslint.config.mjs",
  "postcss.config.mjs",
  "next.config.ts",
];

for (const rel of requiredFiles) {
  test(`arquivo essencial presente: ${rel}`, () => {
    assert.ok(existsSync(join(root, rel)), `missing ${rel}`);
  });
}

test("placeholder da landing menciona GHMS e estado de construção", () => {
  const page = readFileSync(join(root, "app/page.tsx"), "utf8");
  assert.match(page, /GHMS/);
  assert.match(page, /Conteúdo em construção/);
});

test("package.json inclui scripts e stack esperados (Next 16, Tailwind 4, eslint-config-next)", () => {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  for (const name of ["dev", "build", "start", "lint"]) {
    assert.ok(pkg.scripts?.[name], `missing script: ${name}`);
  }
  const nextVersion = pkg.dependencies?.next;
  assert.ok(
    typeof nextVersion === "string" && nextVersion.startsWith("16."),
    `expected next 16.x, got: ${nextVersion}`,
  );
  assert.ok(pkg.devDependencies?.["eslint-config-next"]);
  const tw = pkg.devDependencies?.tailwindcss;
  assert.ok(
    typeof tw === "string" && (tw === "^4" || tw.startsWith("^4")),
    `expected tailwind ^4, got: ${tw}`,
  );
});

test("globals.css usa import do Tailwind v4", () => {
  const css = readFileSync(join(root, "app/globals.css"), "utf8");
  assert.match(css, /@import\s+["']tailwindcss["']/);
});
