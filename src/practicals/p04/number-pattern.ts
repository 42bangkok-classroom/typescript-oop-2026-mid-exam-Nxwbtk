// Write your code below
const g : number = Number(process.argv[2]);
if (isNaN(g) || g <= 0){
}
for (let i = 0; g > i; i++) {
  let line = ""

  for (let j = 0; i <= j; j++) {
    line += "*";
  }

  console.log(line);
}
export {};
