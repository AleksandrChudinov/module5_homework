let value = +prompt("Введите число");
if (typeof +value !== "number" || isNaN(value % 2) || +value === 0) {
  console.log("Упс, кажется, вы ошиблись");
} else if (value % 2 === 0) {
  console.log("Число чётное");
} else {
  console.log("число нечётное");
}
