const arr = ["one", 1, -26, "once", "single", null];
let numberOfEven = 0;
let numberOfOdd = 0;
for (let i = 1; i < arr.length; i++) {
  if (i % 2 === 0) {
    numberOfEven++;
  } else if (i % 2 !== 0) {
    numberOfOdd++;
  }
}
if (arr.length > 0) {
  console.log("нулевой элемент есть и его значение: " + arr[0]);
}
console.log("количество чётных элементов без учета 0 равно " + numberOfEven);
console.log("количество нечётных элементов равно " + numberOfOdd);
