import { writeResult } from "./utils.js";
import { readFileSync } from "fs";

import Handlebars from "handlebars";

const templateFile = readFileSync("./template.html", "utf-8");
const templateFn = Handlebars.compile(templateFile);

const methodName = "handlebars";
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
