const { execSync } = require('child_process');
const fs = require('fs');
const chalk = require('chalk');

const methods = fs.readdirSync('./methods');

// Uncomment to check a str replacement comparison
// const methods = ['ejs-simple', 'vanilla-simple'];

/**
 * We could run `pnpm run bench --r`, but we do it this way to ensure only 1 benchmark is running at a time.
 */
methods.forEach(method => {
  console.info(chalk.blueBright(`Starting benchmark for method '${method}'...`));
  execSync(`pnpm --filter ${method} bench`, {
    stdio: 'inherit',
  });
});
