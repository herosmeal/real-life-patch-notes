// This program writes the entry line to /output/entry.txt for the make.fun gate.
import { writeFileSync, mkdirSync } from 'node:fs';

const line = 'v2.1.0: fixed a bug where the stomach growled during silent meetings. It now growls only during job interviews.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + '/entry.txt', line);
