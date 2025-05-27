#!/usr/bin/env -S deno -A

import {Canvas} from "canvas";

export type GraphCtx = {
    canvas: Canvas
    params: Record<string, unknown>
};

// parse args
const [FILE, SIZE] = Deno.args
const [W,H]  = SIZE !== undefined
		? SIZE.split("x").map( e => parseInt(e) )
		: [400,300]

// parse input params
let txt = "";
const decoder = new TextDecoder();
for await (const chunk of Deno.stdin.readable)
  txt += decoder.decode(chunk);

const params = JSON.parse(txt);

// start computation
const canvas = new Canvas(W,H);
const mod = await import( await Deno.realPath(FILE) );
await mod.default({canvas, params});

// write output
await Deno.stdout.write( await canvas.toBuffer() );