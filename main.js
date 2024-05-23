// let x = "hello demah";
// let y = x.split(" ");
// // let spt = x.charAt(0).toUpperCase() + str.slice(1);
// y[1] = y[1].charAt(0).toUpperCase() + y[1].slice(1);
// console.log(y.join(" "));

let User = {
  name: "Meznah",
  email: "MeznahAldossari@hotmail.com",
  id: "321",
  Available: false,
  statusUser: function () {
    if (this.Available) {
      console.log(`The User is Avaliable to work`);
    } else {
      console.log(`The User is NOT Avaliable to work`);
    }
  },
  address: {
    city: {
      primary: "Khobar",
      Secondary: "Riyadh",
    },
    Street: "Alandalows",
  },
  Skills: ["Programming", "Reading", "Drawing"],
};

//1)
console.log(`The User Details ${JSON.stringify(User)}`);
//2
console.log(`The User Name ${User.name}`);
//3
User.id = "18293";
console.log(`The User ID ${User.id}`);

//4

delete User.email;
console.log("The User Detail After Delete the Email" + JSON.stringify(User));
User.statusUser = true;

//5
console.log(`The User Status ${User.statusUser}`);

//6
console.log("The User Address");
console.log(User.address);

//7
console.log("The User City");
console.log(User.address.city);

//8
console.log(`The User Skill ${User.Skills[2]}`);

//9

// console.log(`The User Skill ${JSON.stringify(User.Skills)}`);

console.log(`The User Skill ${User.Skills.join(", ")}`);
