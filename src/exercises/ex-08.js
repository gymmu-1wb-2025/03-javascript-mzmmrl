function f(x) {
	return 4 * x - 1;
}

const start = Number(process.argv[2]);
const end = Number(process.argv[3]);

for (let index = start; index <= end; index++) {
	console.log(f(index));
}
