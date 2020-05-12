const fileSystem = require("fs");
const stringifySafe = require("json-stringify-safe");

const ENV_VARS = ["API_ENDPOINT", "STAGING"];
const DESTINATION = "./src/env.ts";

function main() {
  const envs = {};
  ENV_VARS.forEach((key) => {
    envs[key] = process.env[key] || null;
  });
  const content = `export default ${stringifySafe(envs, null, 2)};`;
  fileSystem.writeFileSync(DESTINATION, `/* tslint-disable */\n${content}\n`);
}

main();
