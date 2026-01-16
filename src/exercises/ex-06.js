const mynumber = Number(process.argv[2]);
const remainder = mynumber % 3;

console.log(`Deine Zahl ist ${mynumber}`);

if (remainder === 0) {
	console.log(`Deine Zahl ist durch 3 teilbar`);
} else {
	console.log(`Deine Zahl ist nicht durch 3 teilbar`);
}
