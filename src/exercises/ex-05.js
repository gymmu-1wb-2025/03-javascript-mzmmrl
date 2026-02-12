const myheight = Number(process.argv[2]);
const mytalent = Number(243 - myheight);

if (mytalent < 50) {
	console.log("Du hast sehr viel Potenzial");
} else if (50 < mytalent && mytalent < 60) {
	console.log("Du musst dringend an deiner Spungkraft arbeiten.");
} else if (60 < mytalent && mytalent < 70) {
	console.log(
		"Wenn du schnell bist, kannst du dir die Libero-Position überlegen.",
	);
} else {
	console.log("Du wirst im Volleyball nicht glücklich werden.");
}
