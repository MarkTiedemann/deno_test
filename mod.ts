import {
  test as stdTest,
  runTests
} from "https://deno.land/std@v0.11.0/testing/mod.ts";
import { assertStrictEq } from "https://deno.land/std@v0.11.0/testing/asserts.ts";

interface Eq<T> {
  (a: T, b: T): void;
}

interface Ca<T> {
  (t: Eq<T>): void;
}

let i = 0;
export function t<T>(a: T, b: T) {
  stdTest({ name: `#${++i}`, fn: () => assertStrictEq(a, b) });
}

export function test<T>(name: string, t: Ca<T>) {
  stdTest({ name, fn: () => t(assertStrictEq) });
}

setTimeout(runTests, 0);
