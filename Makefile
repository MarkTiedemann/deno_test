.PHONY: all fmt

all: fmt
	deno examples/old.ts
	deno examples/new.ts

fmt:
	deno fmt *.ts */*.ts
