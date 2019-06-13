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