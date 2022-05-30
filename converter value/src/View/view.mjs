export default class View {
  constructor() {
    this.firstInput = document.getElementById("firstInput");
    this.secondInput = document.getElementById("secondInput");
    this.leftRadio = document.querySelectorAll("input[name='first-radio']");
    this.rightRadio = document.querySelectorAll("input[name='second-radio']");
    this.firstCurrencyRate = document.getElementById("firstCurrencyRate");
    this.secondCurrencyRate = document.getElementById("secondCurrencyRate");
  }
}
