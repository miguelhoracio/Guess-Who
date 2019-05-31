class Person {
  constructor(obj) {
    this.sex = obj.sex;
    this.skinColor = obj.skinColor;
    this.hairColor = obj.hairColor;
    this.usesGlasses = obj.usesGlasses;
    this.usesHat = obj.usesHat;
    this.active = true;
    this.name = obj.name;
  }
  bajarPersonaje() {
    this.active = false;
  }
}

class IA {
  selectPerson(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  evaluateQuestion(character, question) {
    if (character[question.type] === question.val) {
      return !0;
    } else {
      return !1;
    }
  }

  getQuestion(questions) {
    // get random question
    let number = Math.floor(Math.random() * questions.length);
    // save response within a variable
    var resp = questions[number];
    // alter original array
    questions.splice(number, 1);
    // return response
    return resp;
  }
}

let props = {
  sex: ["Hombre", "Mujer"],
  skinColor: ["Blanco", "Negro", "Mole"],
  hairColor: ["Blanco", "Café", "Azul", "Amarillo", "Negro"],
  usesGlasses: ["Redondos", "Cuadrados", null],
  usesHat: ["Negro", "Rojo", "Verde", null]
};

let questions = [];
// recorrer cada tipo de propiedades
for (const type in props) {
  if (props.hasOwnProperty(type)) {
    const typeArr = props[type];
    for (let j = 0; j < typeArr.length; j++) {
      const val = typeArr[j];
      let question;
      if (type === "sex") {
        question = `¿El sex de tu personaje es ${val}?`;
      } else if (type === "skinColor") {
        question = `¿Tu personaje tiene piel color ${val}?`;
      } else if (type === "hairColor") {
        question = `¿Tu personaje tiene cabello color ${val}?`;
      } else if (type === "usesGlasses") {
        if (val === null) {
          question = "¿Tu personaje no usa lentes?";
        } else {
          question = `¿Tu personaje usa lentes ${val}?`;
        }
      } else if (type === "usesHat") {
        if (val === null) {
          question = "¿Tu personaje no usa sombrero?";
        } else {
          question = `¿Tu personaje usa sombrero ${val}?`;
        }
      }
      questions.push({
        question: question,
        type: type,
        val: val
      });
    }
  }
}
let originalQuestions = Array.from(questions);

let Eli = new Person({
  name: "Eli",
  sex: props.sex[0],
  skinColor: props.skinColor[2],
  hairColor: props.hairColor[0],
  usesGlasses: props.usesGlasses[2],
  usesHat: props.usesHat[0]
});

let Karim = new Person({
  name: "Karim",
  sex: props.sex[0],
  skinColor: props.skinColor[1],
  hairColor: props.hairColor[4],
  usesGlasses: props.usesGlasses[2],
  usesHat: props.usesHat[3]
});

let Agnes = new Person({
  name: "Agnes",
  sex: props.sex[1],
  skinColor: props.skinColor[2],
  hairColor: props.hairColor[1],
  usesGlasses: props.usesGlasses[2],
  usesHat: props.usesHat[3]
});

let Isaac = new Person({
  name: "Isaac",
  sex: props.sex[0],
  skinColor: props.skinColor[0],
  hairColor: props.hairColor[4],
  usesGlasses: props.usesGlasses[0],
  usesHat: props.usesHat[3]
});

let Erica = new Person({
  name: "Erica",
  sex: props.sex[1],
  skinColor: props.skinColor[0],
  hairColor: props.hairColor[0],
  usesGlasses: props.usesGlasses[0],
  usesHat: props.usesHat[3]
});

let Jacob = new Person({
  name: "Jacob",
  sex: props.sex[0],
  skinColor: props.skinColor[0],
  hairColor: props.hairColor[1],
  usesGlasses: props.usesGlasses[1],
  usesHat: props.usesHat[3]
});

let Diego = new Person({
  name: "Diego",
  sex: props.sex[0],
  skinColor: props.skinColor[0],
  hairColor: props.hairColor[1],
  usesGlasses: props.usesGlasses[1],
  usesHat: props.usesHat[1]
});

let Lisa = new Person({
  name: "Lisa",
  sex: props.sex[1],
  skinColor: props.skinColor[0],
  hairColor: props.hairColor[2],
  usesGlasses: props.usesGlasses[2],
  usesHat: props.usesHat[2]
});

let Elsa = new Person({
  name: "Elsa",
  sex: props.sex[1],
  skinColor: props.skinColor[0],
  hairColor: props.hairColor[3],
  usesGlasses: props.usesGlasses[2],
  usesHat: props.usesHat[0]
});

const characters = [Eli, Karim, Agnes, Isaac, Erica, Jacob, Diego, Lisa, Elsa];

let ia = new IA();

// testing
let character = ia.selectPerson(characters);
// console.log(character);
// console.log(questions[2].question);
// console.log(ia.evaluateQuestion(character, questions[2]));
console.log("-- original --");
console.log(questions);
console.log("-- getQuestion --");
console.log(ia.getQuestion(questions));
console.log("-- original-nuevo --");
console.log(questions);
