const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const apple = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid fruit."
})

//fruit.save()

const pineapple = new Fruit ({
  name: "pineapple",
  rating: 9,
  review: "Juicy."
})

//pineapple.save()

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema)

const person = new Person ({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
})

//person.save()


const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 3,
  review: "Too sour for me"
})

const orange = new Fruit ({
  name: "Orange",
  rating: 8,
  review: "Good and juicy"
})

const banana = new Fruit ({
  name: "Banana",
  rating: 10,
  review: "Goes well with everything"
})

//Fruit.insertMany([kiwi, orange, banana])

async function run() {
  //await Fruit.deleteOne({_id: "6523281aa17516f0cc70a54f"})
  //await Fruit.deleteMany({rating: {$gt:5}})
  await Person.updateOne({_id: "65231f87fab37f1e1f956db5"}, {favoriteFruit: orange})

  const foundFruits = await Fruit.find({})
  for (const fruit of foundFruits) {
    console.log(fruit.name)
  }
}

run()
