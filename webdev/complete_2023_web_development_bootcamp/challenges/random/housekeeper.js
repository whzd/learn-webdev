 var housekeeper1 = {
     name: "Concuela",
     age: 23,
     hasWorkPermit: true,
     yearOfExperience: 5,
     favouriteCleaningTasks: ["laundry", "dishes"]
 }

console.log(housekeeper1.name);

class HouseKeeper {
    constructor(name, age, hasWorkPermit, yearOfExperience, favouriteCleaningTasks) {
        this.name = name;
        this.age = age;
        this.hasWorkPermit = hasWorkPermit;
        this.yearOfExperience = yearOfExperience;
        this.favouriteCleaningTasks = favouriteCleaningTasks;
        this.clean = function(){
            console.log("cleaning in progress");
        }
    }
}

var housekeeper2 = new HouseKeeper("Maria", 24, true, 6, ["toilet", "bedroom"]);

console.log(housekeeper2.name);
housekeeper2.clean();
