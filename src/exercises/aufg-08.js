function myage(alter) {
	if (alter >= 18) {
		console.log("Sie sind volljährig");
	} else {
		console.log("Sie sind noch nicht volljährig");
	}
}
myage(process.argv[2]);
