#!/usr/bin/env node

/* eslint-disable */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
/* eslint-enable */

const pkgPath = path.join(process.cwd(), 'package.json');
const pkg = require(pkgPath); // eslint-disable-line

let updates;
try {
  updates = execSync(`npm outdated --json`).toString();
} catch (e) {
  updates = e.stdout.toString();
}
updates = JSON.parse(updates);

[
  'dependencies',
  'devDependencies',
  'optionalDependencies',
  'peerDependencies',
].map((d) => {
  if (!(d in pkg)) return;

  Object.entries(updates).map(([k, v]) => {
    if (!(k in pkg[d])) return;

    if (!v.latest.startsWith('git')) pkg[d][k] = v.latest;
  });
});

const f = prettier.format(JSON.stringify(pkg), { parser: 'json-stringify' });

fs.writeFileSync(pkgPath, f);
