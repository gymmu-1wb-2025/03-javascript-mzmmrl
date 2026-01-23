const mynumber = Number(process.argv[2]);
const divider = Number(process.argv[3]);
const remainder = mynumber % divider;

console.log(`Deine Zahl ist ${mynumber}`);

if (remainder === 0) {
	console.log(`Deine Zahl ist durch ${divider} teilbar`);
} else {
	console.log(`Deine Zahl ist nicht durch ${divider} teilbar`);
}
