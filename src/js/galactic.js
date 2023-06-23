export default class Galaxycalc {
    constructor(age) {
        this.earthAge = age;
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
}