'use strict'
const whichPmRuns = require('../../..')

const pm = whichPmRuns()
if (pm.name !== 'pnpm' || !pm.version) process.exit(1)
