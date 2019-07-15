# deno_test [![Build Status](https://travis-ci.com/MarkTiedemann/deno_test.svg?branch=master)](https://travis-ci.com/MarkTiedemann/deno_test)

**Convenience wrapper around Deno `std/testing`.**

## Features

**1 - No need to wrap tests with the `test` function**<br>
**2 - No need to call `runTests`**

Turn...

```typescript
import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

test(function onePlusOne() {
  assertEquals(1 + 1, 2);
});

runTests();
```

...into:

```typescript
import { t } from "https://raw.githubusercontent.com/MarkTiedemann/deno_test/v0.1.0/mod.ts";

t(1 + 1, 2);
```

**3 - Name tests easily**

Turn...

```typescript
import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

test({
  name: "2 * 2",
  fn: () => assertEquals(2 * 2, 4);
});

runTests();
```

...into:

```typescript
import { test } from "https://raw.githubusercontent.com/MarkTiedemann/deno_test/v0.1.0/mod.ts";

test("2 * 2", t => {
  t(2 * 2, 4);
});
```

## Changelog

- `v0.1.0`: July 15, 2019 - Initial release

## Development

- `make`: Build the project

## License

[Blue Oak](https://blueoakcouncil.org/license/1.0.0)
