characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "kevien",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

let Names = characters.map((element) => {
  if (element.eye_color == "blue") {
    console.log(`Name: ${element.name}`);
  }
});
//==
// let Mass = characters.map((element) => {
//   if (element.mass > 50) {
//     console.log(`Gender: ${element.gender}`);
//   }
// });

let Gender = characters.filter((element) => {
  if (element.mass > 50) {
    return element.gender;
  }
});
console.log("====");
console.log("____________");
Gender.forEach((element) => {
  console.log(`Name: ${element.name} - Mass: ${element.mass} }`);
});

let height2 = characters.filter((element) => {
  return element.height < 200;
});
console.log("____________");
height2.forEach((element) => {
  console.log(
    `Name: ${element.name} - Height: ${element.height} - Gender: ${element.gender} - Mass: ${element.mass} - eye color: ${element.eye_color}`
  );
});

// let Persons = characters.map((element) => {
//   if (element.height < 200) {
//     console.log(`Character with Height < 200: ${element.name}`);
//   }
// });

//===============
console.log("===============");
let Males = characters.map((element) => {
  if (element.gender == "male") {
    `Name: ${element.name} - Height: ${element.height} - Gender: ${element.gender} - Mass: ${element.mass} - eye color: ${element.eye_color}`;
  }
});

let All_names = characters.map((element) => {
  console.log(`Name: ${element.name}`);
});

let heights = characters.map((element) => {
  console.log(`Height: ${element.height}`);
});

//sort
let sorted_Arr = characters.sort((number1, number2) => {
  return number1.mass - number2.mass;
});

sorted_Arr.forEach((element) => {
  console.log(` Mass: ${element.mass}`);
});

//sort by height

let sorted_Arr2 = characters.sort((number1, number2) => {
  return number2.height - number1.height;
});

sorted_Arr.forEach((element) => {
  console.log(` Height: ${element.height}`);
});

// EVERY
let MassqQuestion = characters.every((mass) => {
  return mass.mass > 40;
});
console.log(`Does every character have mass more than 40? ${MassqQuestion}`);

let heightqQuestion = characters.every((height) => {
  return height.height < 200;
});
console.log(`Does every character have mass more than 40? ${MassqQuestion}`);

//Some
let EyesQuestion = characters.some((color) => {
  return color.eye_color == "blue";
});
console.log(`Is there at least one character with blue eyes? ${EyesQuestion}`);

let TellterQuestion = characters.some((heights) => {
  return heights.height > 210;
});
console.log(
  `Is there at least one character taller than 210?  ${TellterQuestion}`
);
