#!/usr/bin/env node

/* Calculator CLI
 * Supported operations:
 *  - Addition: +
 *  - Subtraction: -
 *  - Multiplication: * or x or ×
 *  - Division: / or ÷
 *
 * Usage examples:
 *   node src/index.js 4 + 5
 *   calc 10 ÷ 2
 */

const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error('Usage: calc <num1> <operator> <num2>');
  process.exit(1);
}

const [aStr, op, bStr] = args;
const a = Number(aStr);
const b = Number(bStr);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be valid numbers');
  process.exit(1);
}

let result;
switch (op) {
  case '+':
    result = a + b;
    break;
  case '-':
    result = a - b;
    break;
  case '*':
  case 'x':
  case 'X':
  case '×':
    result = a * b;
    break;
  case '/':
  case '÷':
    if (b === 0) {
      console.error('Error: division by zero');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.error('Unsupported operator. Use one of: +, -, *, x, /');
    process.exit(1);
}

console.log(result);
