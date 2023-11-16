import { writeResult } from "./utils.js";

import { compile } from "ejs";
import { readFileSync } from "fs";

const options = {
  cache: true,
  filename: "./template.ejs"
};

const templateFile = readFileSync("./template.ejs", "utf-8");
const templateFn = compile(templateFile, options);

const methodName = "ejs-simple";
const depth = 64472;

const warmUpV8 = () => {
  console.info("Warming up...");

  for (let i = 0; i < 20; i += 1) {
    templateFn({ data: 'test' });
  }

  console.info("Finished warming up!");
};

const benchmark = () => {
  let time = [];

  for (let i = 0; i < depth; i += 1) {
    const start = process.hrtime();

    templateFn({ data: 'test' });

    time.push(process.hrtime(start));
  }

  writeResult(methodName, time);
};

warmUpV8();
benchmark();
