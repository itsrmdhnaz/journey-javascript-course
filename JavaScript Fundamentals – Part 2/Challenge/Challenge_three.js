//CHALLENGE #3
/* Write your code below. Good luck! 🙂 */
const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI() {
        const bmi = this.bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}

const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI() {
        const bmi = this.bmi = this.mass / (this.height * this.height);
        return bmi;
    }
}

john.calcBMI() > mark.calcBMI()
? console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
: console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);

