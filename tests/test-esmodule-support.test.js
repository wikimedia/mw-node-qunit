import { test } from "./esmodule";

console.log("ESMODULE", process.argv);

QUnit.module("ES modules support");

QUnit.test("Can use ES modules", assert => {
  assert.equal(test, 1, "ES module value was imported correctly");
});
