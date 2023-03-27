const arr = [1, 1, 1, 1, 1];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[0] === arr[i]) {
    result++;
  }
}
if (result === arr.length) {
  console.log("true");
} else {
  console.log("false");
}
