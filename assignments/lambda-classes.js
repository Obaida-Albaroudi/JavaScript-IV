// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name} I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(string) {
        console.log(`Today we are learning about ${string}`)
    };
    grade(Student, subject) {
        console.log(`${Student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function (element) {
            console.log(element);
        }, this)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class PM extends Instructor {
    constructor(extension) {
        super(extension);
        this.gradClassName = extension.gradClassName;
        this.favInstructor = extension.favInstructor;
    }
    standUp(slack) {
        console.log(`${this.name} announces to ${slack}, @channel standy times!`);
    }
    debugsCode(Student, subject) {
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
    }
}

//Instructors

const Dan = new Instructor({
    name: "Dan",
    age: 28,
    location: "SF",
    speciality: "Back-End",
    favLanguage: "JavaScript",
    catchPhrase: "When you start working.."
});

const Josh_K = new Instructor({
    name: "Josh",
    age: 38,
    location: "LA",
    speciality: "Front-End",
    favLanguage: "CSS",
    catchPhrase: "It is all about imagining the design."
});

const Alissa = new Instructor({
    name: "Alissa",
    age: 32,
    location: "San Diego",
    speciality: "Full-Stack",
    favLanguage: "Python",
    catchPhrase: "Once you understand the logic behind coding it becomes easy."
});


//Students

const Obaida = new Student({
    name: "Obaida",
    age: 22,
    location: "OC",
    speciality: "N/A",
    favLanguage: "Python",
    catchPhrase: "You live and learn.",
    previousBackground: "Studied Economics",
    className: "ICS31A",
    favSubjects: ["Econometrics", "Python", "Machine Learning"]
});

const John = new Student({
    name: "John",
    age: 25,
    location: "SLC",
    speciality: "Full-Stack",
    favLanguage: "Java",
    catchPhrase: "We gotta make that bread.",
    previousBackground: "Pre-Med",
    className: "Bio234",
    favSubjects: ["Organic Chemistry", "Biology", "JavaScript"]
});

const Sara = new Student({
    name: "Sara",
    age: 27,
    location: "DC",
    speciality: "Full-Stack",
    favLanguage: "C",
    catchPhrase: "To live is to travel.",
    previousBackground: "Studied Civil Engineering",
    className: "Structures 32A",
    favSubjects: ["Multi-variable Calculus", "Engineering 101A", "C"]
});
//Project Managers

const Adetunji = new PM({
    name: "Adetunji",
    age: 25,
    location: "NYC",
    speciality: "Full-Stack",
    favLanguage: "JavaScript",
    catchPhrase: "Did you all do your airtables?",
    gradClassName: "Advanced JavaScript",
    favInstructor: "Josh Knell"
});

const Josh = new PM({
    name: "Josh",
    age: 27,
    location: "Denver",
    speciality: "Front-End",
    favLanguage: "CSS",
    catchPhrase: "@here Today's Guided Project recoding is ready!",
    gradClassName: "Advanced CSS",
    favInstructor: "Josh Knell"
});

const Brandi = new PM({
    name: "Brandi",
    age: 24,
    location: "Miami",
    speciality: "Back-End",
    favLanguage: "C++",
    catchPhrase: "Good morning, WEB21",
    gradClassName: "Advanced C++",
    favInstructor: "Josh Knell"
});

console.log(Dan.age);
console.log(Obaida.favSubjects);
console.log(Adetunji.catchPhrase);
console.log(Josh.favInstructor);
console.log(Alissa.name);
console.log(Sara.previousBackground);
console.log(Obaida.speak());
console.log(Josh_K.demo("JavaScript"));
console.log(Dan.grade(John, "CSS"));
console.log(Obaida.listsSubjects());
console.log(John.PRAssignment("HTML35"));
console.log(Obaida.sprintChallenge("JavaScript"));
console.log(Adetunji.standUp("Web21_adetunji"))
console.log(Josh.debugsCode(Obaida, "Python"))