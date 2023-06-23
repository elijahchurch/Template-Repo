export default class Galaxycalc {
    constructor(age) {
        this.earthAge = Math.round(age);
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marsAge = 0;
        this.jupiterAge = 0;
        this.earthPassage = "";
        this.mercuryPassage = "";
        this.venusPassage = "";
        this.marsPassage = "";
        this.jupiterPassage = "";
    }

    setGalacticAges() {
        this.mercuryAge += parseFloat((this.earthAge / 0.24).toFixed(2));
        this.venusAge += parseFloat((this.earthAge / 0.62).toFixed(2));
        this.marsAge += parseFloat((this.earthAge / 1.88).toFixed(2));
        this.jupiterAge += parseFloat((this.earthAge / 11.86).toFixed(2));
    }

    calcGalacticPassage(compareAge) {
        let filterAge = Math.round(compareAge)
        let pastPassage = `since you were ${filterAge} on Earth.`
        let futurePassage = `until you are ${filterAge} on Earth.`
        if (filterAge < this.earthAge) {
            if ((this.earthAge - filterAge) === 1) {
                this.earthPassage = `${this.earthAge - filterAge} year has passed ${pastPassage}`;
            } else {
                this.earthPassage = `${this.earthAge - filterAge} years have passed ${pastPassage}`;
            }
            this.mercuryPassage = `${(this.mercuryAge - (filterAge / 0.24)).toFixed(2)} years have passed on Mercury ${pastPassage}`;
            this.venusPassage = `${(this.venusAge - (filterAge / 0.62)).toFixed(2)} years have passed on Venus ${pastPassage}`;
            this.marsPassage = `${(this.marsAge - (filterAge / 1.88)).toFixed(2)} years have passed on Mars ${pastPassage}`;
            this.jupiterPassage = `${(this.jupiterAge - (filterAge / 11.86)).toFixed(2)} years have passed on Jupiter ${pastPassage}`;
        } else if (filterAge > this.earthAge) {
            if ((filterAge - this.earthAge) === 1) {
                this.earthPassage = `${filterAge - this.earthAge} year will pass ${futurePassage}`;
            } else {
                this.earthPassage = `${filterAge - this.earthAge} years will pass ${futurePassage}`;
            }
            this.mercuryPassage = `${((filterAge / 0.24) - this.mercuryAge).toFixed(2)} years will pass on Mercury ${futurePassage}`;
            this.venusPassage = `${((filterAge / 0.62) - this.venusAge).toFixed(2)} years will pass on Venus ${futurePassage}`;
            this.marsPassage = `${((filterAge / 1.88) - this.marsAge).toFixed(2)} years will pass on Mars ${futurePassage}`;
            this.jupiterPassage = `${((filterAge / 11.86) - this.jupiterAge).toFixed(2)} years will pass on Jupiter ${futurePassage}`;
        } else {
            this.earthPassage = "The age you just entered matches how old you are already!";
            this.mercuryPassage = "";
            this.venusPassage = "";
            this.marsPassage = "";
            this.jupiterPassage = "";
        }
    }

}