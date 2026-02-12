function double(number) {
	console.log(`${number} ist das doppelte von ${process.argv[2]}`);
}
double(process.argv[2] * 2);
