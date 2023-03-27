let x;
if (typeof x === "number") {
  console.log("число");
} else if (typeof x === "string") {
  console.log("строка");
} else if (typeof x === "boolean") {
  console.log("логический тип");
} else {
  console.log("Тип x не определён");
}
