const { spawnSync } = require('child_process');
const { expect } = require('chai');

function runCLI(a, op, b) {
  return spawnSync('node', ['src/index.js', String(a), String(op), String(b)], { encoding: 'utf8' });
}

describe('Calculator CLI - basic operations', () => {
  it('adds 2 + 3 = 5', () => {
    const res = runCLI(2, '+', 3);
    expect(res.status).to.equal(0);
    expect(res.stdout.trim()).to.equal('5');
  });

  it('subtracts 10 - 4 = 6', () => {
    const res = runCLI(10, '-', 4);
    expect(res.status).to.equal(0);
    expect(res.stdout.trim()).to.equal('6');
  });

  it('multiplies 45 * 2 = 90', () => {
    const res = runCLI(45, '*', 2);
    expect(res.status).to.equal(0);
    expect(res.stdout.trim()).to.equal('90');
  });

  it('divides 20 / 5 = 4', () => {
    const res = runCLI(20, '/', 5);
    expect(res.status).to.equal(0);
    expect(res.stdout.trim()).to.equal('4');
  });

  it('supports alternative multiplication operators (x and ×)', () => {
    const r1 = runCLI(6, 'x', 7);
    expect(r1.status).to.equal(0);
    expect(r1.stdout.trim()).to.equal('42');

    const r2 = runCLI(6, '×', 7);
    expect(r2.status).to.equal(0);
    expect(r2.stdout.trim()).to.equal('42');
  });

  it('supports division symbol ÷', () => {
    const res = runCLI(9, '÷', 3);
    expect(res.status).to.equal(0);
    expect(res.stdout.trim()).to.equal('3');
  });

  it('handles division by zero with non-zero exit and error message', () => {
    const res = runCLI(5, '/', 0);
    expect(res.status).to.not.equal(0);
    expect(res.stderr.toLowerCase()).to.include('division by zero');
  });
});
