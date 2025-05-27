import type {GraphCtx} from "../bin/graph";

import {CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement} from 'chart.js';

Chart.register([
  CategoryScale,
  LineController,
  LineElement,
  LinearScale,
  PointElement
]);

export default async function({canvas, params}: GraphCtx) {

	return new Chart(
	  //ctx,
	  canvas, // TypeScript needs "as any" here
	  {
	    type: 'line',
	    data: {
	      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	      datasets: [{
		label: '# of Votes',
		data: params.data,
		borderColor: 'red'
	      }]
	    }
	  }
	);
}