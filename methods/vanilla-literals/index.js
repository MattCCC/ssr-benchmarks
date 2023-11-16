import { writeResult } from "./utils.js";

const methodName = "vanilla-literals"
const depth = 64472;
import template from './template.js'

const templateFn = () => {
  return template('test');
};

const warmUpV8 = () => {
  console.info("Warming up...");

  for (let i = 0; i < 20; i += 1) {
    templateFn();
  }

  console.info("Finished warming up!");
};

const benchmark = () => {
  let time = [];

  for (let i = 0; i < depth; i += 1) {
    const start = process.hrtime();

    templateFn();

    time.push(process.hrtime(start));
  }

  writeResult(methodName, time);
};

warmUpV8();
benchmark();
