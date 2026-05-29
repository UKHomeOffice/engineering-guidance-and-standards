import test from "node:test";
import assert from "node:assert/strict";
import { parseBoolean, parseLabels } from "../../scripts/content-review/helpers.js";

test('parseBoolean: true string (case-insensitive)', () => {
  assert.equal(parseBoolean('true'), true);
  assert.equal(parseBoolean('TRUE'), true);
  assert.equal(parseBoolean('TrUe'), true);
});

test('parseBoolean: false string', () => {
  assert.equal(parseBoolean('false'), false);
  assert.equal(parseBoolean('FALSE'), false);
});

test('parseBoolean: fallback for undefined', () => {
  assert.equal(parseBoolean(undefined, true), true);
  assert.equal(parseBoolean(undefined, false), false);
});

test('parseBoolean: non-true strings', () => {
  assert.equal(parseBoolean('yes'), false);
  assert.equal(parseBoolean('1'), false);
  assert.equal(parseBoolean(''), false);
  assert.equal(parseBoolean(null), false);
  assert.equal(parseBoolean('tru'), false);
});

test('parseBoolean: trims whitespace', () => {
  assert.equal(parseBoolean('  true  '), true);
  assert.equal(parseBoolean('  false  '), false);
});

test('parseLabels: splits and trims', () => {
  assert.deepEqual(parseLabels('foo, bar, baz'), ['foo', 'bar', 'baz']);
  assert.deepEqual(parseLabels('foo,bar,baz'), ['foo', 'bar', 'baz']);
  assert.deepEqual(parseLabels(' foo , bar ,baz '), ['foo', 'bar', 'baz']);
});

test('parseLabels: filters empty', () => {
  assert.deepEqual(parseLabels('foo,,bar, ,baz'), ['foo', 'bar', 'baz']);
});

test('parseLabels: default to ["content"]', () => {
  assert.deepEqual(parseLabels(), ['content']);
  assert.deepEqual(parseLabels(''), ['content']);
  assert.deepEqual(parseLabels(null), ['content']);
});

test('parseLabels: single label', () => {
  assert.deepEqual(parseLabels('foo'), ['foo']);
});
