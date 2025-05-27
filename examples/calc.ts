import type {CalcCtx} from "../bin/calc";

export default async function({params}: CalcCtx) {

	const data = params["data"] as number[];

	return {
		min: Math.min(...params.data),
		max: Math.max(...params.data),
	}
}