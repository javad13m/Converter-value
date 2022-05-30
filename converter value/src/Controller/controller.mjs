export default class Controller {
  getAPI() {
    fetch(
      `https://api.exchangerate.host/convert?from=${this.model.leftValue}&to=${this.model.rightValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.data = data.result;
        this.view.firstCurrencyRate.innerText = `1 ${this.model.leftValue} = ${this.data} ${this.model.rightValue} `;
        this.view.secondCurrencyRate.innerText = `1 ${this.model.rightValue} = ${Math.floor((1 / this.data) * 10 ** 6) / 10 ** 6} ${this.model.leftValue}`;
        this.view.secondInput.value = this.data * this.view.firstInput.value;
      });
  }
  constructor(model, view) {
  this.model = model;
  this.view = view;
  }

  init() {
    this.render();
    this.getAPI();
  }

  render() {
    this.view.firstInput.addEventListener("keyup", () => {
      this.view.secondInput.value = this.data * this.view.firstInput.value;
      this.view.firstInput.value = this.view.firstInput.value;
    });
    this.view.secondInput.addEventListener("keyup", () => {
      this.view.firstInput.value =
        this.view.secondInput.value * (1 / this.data);
      this.view.secondInput.value = this.view.secondInput.value;
    });

    this.view.firstInput.value = 1;
    this.view.leftRadio.forEach((el) => {
      el.addEventListener("click", (event) => {
        this.model.leftValue = event.target.value;
        this.getAPI();
      });
    });

    this.view.rightRadio.forEach((el) => {
      el.addEventListener("click", (event) => {
      this.model.rightValue = event.target.value;
      this.getAPI();
      });
    });
  }
}
