// CODE here for your Lambda Classes

class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }
    speak(){
        console.log `Hello my name is ${this.name} I am from ${this.location}`;
    }
}
  
class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(string){
        console.log(`Today we are learning about ${string}`)
    };
    grade(student, subject){
        console.log(`${this.name} receives a perfect score on ${this.subject}`);
    }
}
  
class Student extends Instructor{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this,name} has submitted a PR for ${subjec}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}
  
class PM extends Instructor{
    constructor(extension){
        super(exetension);
        this.gradClassName = extension.gradClassName;
        this.favInstructor = extension.favInstructor;
    }
    standUp(slack){
        console.log(`${this.name} announces to ${slack}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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

const Josh = new Instructor({
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

console.log(Alissa)
  
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
console.log(Obaida)

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