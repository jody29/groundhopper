import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { createJiti } from "jiti";
import { generateImportMap } from "payload";
import { generateTypes } from "payload/node";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/env.ts", "./src/users.ts"],

  fixedExtension: true,
  shims: true,
  clean: false,
  ignoreWatch: [
    ".turbo",
    "tsconfig.tsbuildinfo",
    "./src/payload-types.ts",
    "./src/payload-generated-schema.ts",
  ],
  skipNodeModulesBundle: true,
  async onSuccess(cfg, signal) {
    cfg.logger.info("Generating import map...");

    const config = await getConfig();

    if (!existsSync(config.admin.importMap.importMapFile)) {
      await mkdir(path.dirname(config.admin.importMap.importMapFile), {
        recursive: true,
      });
      await writeFile(config.admin.importMap.importMapFile, "", { signal });
    }

    await generateImportMap(config, { log: false, force: true });

    cfg.logger.info("Import map generated");

    cfg.logger.info("Generating types...");

    await generateTypes(config, { log: false });

    cfg.logger.info("Types generated");

    if (cfg.watch !== true) {
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(0);
    }
  },
});

async function getConfig() {
  const jiti = createJiti(import.meta.url, {
    moduleCache: false,
    debug: false,
  });

  return await jiti.import<typeof import("./src/payload.config").default>(
    "./src/payload.config"
  );
}
