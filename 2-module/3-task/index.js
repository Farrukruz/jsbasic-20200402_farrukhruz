let calculator = {
  sum() {
    return this.a + this.b
    },
  mul() {
    return this.a * this.b
    },
  read() {
    this.a = prompt(`Добавте a `, 0)
    this.b = prompt(`Добавте б `, 0)
    },
    };
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
