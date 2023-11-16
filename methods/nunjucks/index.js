import { writeResult } from "./utils.js";

import nunjucks from "nunjucks";

const templateFile = "./template.html";
const templateFn = nunjucks.render;

const methodName = "nunjucks";
const depth = 64472;

const warmUpV8 = () => {
  console.info("Warming up...");

  for (let i = 0; i < 20; i += 1) {
    templateFn(templateFile, { data: 'test' });
  }

  console.info("Finished warming up!");
};

const benchmark = () => {
  let time = [];

  for (let i = 0; i < depth; i += 1) {
    const start = process.hrtime();

    templateFn(templateFile, { data: 'test' });

    time.push(process.hrtime(start));
  }

  writeResult(methodName, time);
};

warmUpV8();
benchmark();
