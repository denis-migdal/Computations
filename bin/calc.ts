#!/usr/bin/env -S deno -A

export type CalcCtx = {
    params: Record<string, unknown>
};

// parse args
const [FILE] = Deno.args;

// parse input params
let txt = "";
const decoder = new TextDecoder();
for await (const chunk of Deno.stdin.readable)
  txt += decoder.decode(chunk);

const params = JSON.parse(txt);

// start computation
const mod    = await import( await Deno.realPath(FILE) );
const result = await mod.default({params});

// write output
const encoder = new TextEncoder();
await Deno.stdout.write(  encoder.encode( JSON.stringify(result) ) );