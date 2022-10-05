const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const pipeReverse =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

const getName = (person) => {
  console.log("getting the name");
  return person.name;
};
const capitilizeFirstLetter = (x) => x.charAt(0).toUpperCase() + x.slice(1);
const getTwoLetters = (x) => x.substr(0, 2);
const reverse = (x) => x.split("").reverse().join("");
const append = (x) => {
  console.log("appending");
  return `${x} a bitch`;
};

// console.log(
//   append(
//     reverse(getTwoLetters(capitilizeFirstLetter(getName({ name: "mike" }))))
//   )
// );

const r1 = pipe(
  getName,
  capitilizeFirstLetter,
  getTwoLetters,
  reverse,
  append
)({ name: "mike" });
console.log(r1);

const data = [
  {
    boy: "jeffry",
    faction: "bathhouse",
  },
  {
    boy: "steven",
    faction: "hitchhiker",
  },
];

export const Box = (x) => ({
  map: (f) => Box(f(x)),
  inspect: `Box${x}`,
  fold: (f) => f(x),
});

const findJeffry = (data) =>
  Box(data)
    .map((x) => x.filter((b) => b.faction === "bathhouse")[0])
    .map((x) => x.boy)
    .fold((x) => x);

console.log(findJeffry(data));

const getFoodBetweenOneAndTwo = (data) =>
  Box(data)
    .map((x) => x.filter((f) => f.category === "beverages"))
    .map((x) => x.filter((f) => f.price > 1.0))
    .map((x) => x.filter((f) => f.price <= 2.0))
    .map((x) => x.map((f) => f.price))
    .map((x) => x.map((f) => parseFloat(f)))
    .map((x) => x.reduce((a, c) => a + c))
    .fold((x) => x);

const r2 = getFoodBetweenOneAndTwo(data);
console.log(r2);
