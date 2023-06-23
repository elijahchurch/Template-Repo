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
        let endPassage = `since you were ${filterAge} on Earth.`
        if (filterAge < this.earthAge) {
            if ((this.earthAge - filterAge) === 1) {
                this.earthPassage = `${this.earthAge - filterAge} year has passed ${endPassage}`;
            } else {
                this.earthPassage = `${this.earthAge - filterAge} years have passed ${endPassage}`;
            }
            this.mercuryPassage = `${(this.mercuryAge - (filterAge / 0.24)).toFixed(2)} years have passed on Mercury ${endPassage}`;
            this.venusPassage = `${(this.venusAge - (filterAge / 0.62)).toFixed(2)} years have passed on Venus ${endPassage}`;
            this.marsPassage = `${(this.marsAge - (filterAge / 1.88)).toFixed(2)} years have passed on Mars ${endPassage}`;


        }

    }

}