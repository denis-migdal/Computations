import type {GraphCtx} from "../bin/graph";

import Chart from "../../Libs/ChartJS/dist/dev/libs/ChartJS/index.js";

export default async function({canvas, params}: GraphCtx) {

	const chart = new Chart(canvas);

    chart.update();
}