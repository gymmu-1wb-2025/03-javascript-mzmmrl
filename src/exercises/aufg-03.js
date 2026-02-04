function max(a, b) {
	if (a === b) {
		console.log(`Die Zahlen sind gleich gross`);
		return a;
	} else if (a > b) {
		console.log(`${a} ist grösser`);
		return a;
	} else if (a < b) {
		console.log(`${b} ist grösser`);
		return b;
	}
}

max(Number(process.argv[2]), Number(process.argv[3]));
