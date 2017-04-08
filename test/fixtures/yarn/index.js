'use strict'
const whichPmRuns = require('../../..')

const pm = whichPmRuns()
if (pm.name !== 'yarn' || !pm.version) process.exit(1)
