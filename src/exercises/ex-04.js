const myweight = Number(process.argv[2])
const myheight = Number(process.argv[3])
const BMIscore = myweight/(myheight)**2

console.log(`Hallo, dein gewicht beträgt ${myweight} Kg. Du bist aktuell ${myheight} cm gross, das heisst dein BMI wert liegt bei ${BMIscore}`)