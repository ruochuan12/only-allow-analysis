'use strict'
const whichPmRuns = require('../../..')

const pm = whichPmRuns()
if (pm.name !== 'npm' || !pm.version) process.exit(1)
