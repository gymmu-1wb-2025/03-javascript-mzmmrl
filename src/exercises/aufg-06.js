function printNumbers(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum = sum + i;
	}
	return Number(sum);
}

const s = printNumbers(Number(process.argv[2]));
console.log(`die summe ust ${s}`);
