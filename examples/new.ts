import { t, test } from "../mod.ts";

t(1 + 1, 2);
t(1 + 2, 3);

test("mult", t => {
  t(1 * 1, 1);
  t(1 * 2, 2);
});
