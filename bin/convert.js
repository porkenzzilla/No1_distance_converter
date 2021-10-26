#!/usr/bin/env node

import { convertDistance, getFromUnit, getValue, getToUnit } from "../src/convert_length.js";

console.log("Instruction: You have several units of measurement for conversion.\nm - metre, cm - centimeter, mm - millimeter, km - kilometer, in - inch, ft - feet, yd - yards.\n1) In the first line you write WHAT you want to convert. (Example: m)\n2) In the second line HOW MUTCH of this unit. (Example: 0.6)\n3) In the third TO which unit will be converted. (Example: in)\n4) And in the fourth line you get the result. (Example: { from: 'm', to: 'in', value: '23.62' })");

convertDistance(getFromUnit, getValue, getToUnit);
