# ssr-benchmarks

This benchmark is a fork of great project done by @jackyef - https://github.com/jackyef/ssr-benchmarks. It cuts on number of methods so to compare just the rendering (standard replacement used in most of the cases). Big thank you for the SSR benchmarks and testing!

The following approaches are compared:

1. EJS - Standard Node templating
2. Template Literals - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
3. Vanilla replacement (regex) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

> Want to see the results? Go straight to [result.md](./result.md)

## Setup

This project uses `pnpm`. If you do not have `pnpm` yet, install it globally.

```
npm install -g pnpm
```

Then just install the dependencies using `pnpm`

```
pnpm install
```

## Running the benchmarks

```
pnpm run build:all
pnpm run bench:all
```

Result is outputted to `result.md` and `result.json` files in the respective dist/ directories.

## Running specific benchmark

```
pnpm --filter <method-name> bench
```

Example:

```
pnpm --filter ejs-simple bench
```

## The benchmark

The benchmark tests various approaches to see how long it takes for each to render around 64472 `<div>`s.

1. v8 warm up done with 20 runs.
2. Actual benchmark is done.
3. Avg time and standard deviation are collected.

Results depend on the machine the code runs at! Tested on Node 20.9.0. ESM is used. Interesting with the CJS the results were on avg. 1.5x slower but more benchmark would be required.
