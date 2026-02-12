function f(x) {
	return 4 * x - 1;
}

for (let i = 2; i < process.argv.length; i++) {
	const x = Number(process.argv[i]);
	const y = f(x);
	console.log(`Zahl: ${y}`);
}
