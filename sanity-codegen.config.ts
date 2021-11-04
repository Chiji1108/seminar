import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./packages/studio/schemas/schema.js",
  outputPath: "./packages/web/lib/schema.ts",
};

export default config;
