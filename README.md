# Computations

Create graphs and run computations, in the terminal or in the Browser

## Usage

```bash
$JSON_PARAMS | calc  $FILE
$JSON_PARAMS | graph $FILE [$Wx$H] > $OUTPUT_FILE
```

💡 You can use `| python -m json.tool` to prettify `calc` output.

💡 You can use `| convert - -flatten  - | display -` to open the generated graph.

## Run examples

```bash
echo '{"data": [20,10,30]}' | calc  ./examples/calc.ts
echo '{"data": [20,10,30]}' | graph ./examples/chartjs.ts > /tmp/graph.png
echo '{"data": [20,10,30]}' | graph ./examples/chartjs++.ts > /tmp/graph.png
```

## Install

```bash
npm run install
```

## API

### Computations


```ts
import type {CalcCtx} from ".../bin/calc";

export default async function(ctx: CalcCtx) {
    // compute what you need and return your results.
}
```

<b>Context:</b>
- `params` : received parameters you can use to build your graph.

### Graphs

```ts
import type {GraphCtx} from ".../bin/graph";

export default async function(ctx: GraphCtx) {
    // draw your graph on ctx.canvas
}
```

<b>Context:</b>
- `canvas` : HTML canvas you draw on.
- `params` : received parameters you can use to build your graph.
