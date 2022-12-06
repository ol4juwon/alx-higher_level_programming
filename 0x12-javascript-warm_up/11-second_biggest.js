// #!/usr/bin/node
const args = process.argv;
const len = args.length;
const newArr = [];
if (len <= 3) {
  console.log(0);
} else {
  newArr.push(...args.slice(2).map(Number));
  newArr.sort(function (a, b) { return (b - a); });
  console.log(newArr[1]);
}
