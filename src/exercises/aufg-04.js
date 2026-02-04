function iseven(number) {
	if (process.argv[2] % 2 === 0) {
		console.log(`${number} ist gerade`);
	} else {
		console.log(`${number} ist ungerade`);
	}
}

iseven(process.argv[2]);
