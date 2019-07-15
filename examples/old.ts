import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";

test(function add() {
  assertStrictEq(1 + 1, 2);
  assertStrictEq(1 + 2, 3);
});

test(function mult() {
  assertStrictEq(1 * 1, 1);
  assertStrictEq(1 * 2, 2);
});

runTests();
