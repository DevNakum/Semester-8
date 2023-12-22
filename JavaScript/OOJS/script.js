// ******* Prototype ***********
let a = {
    name:"Dev",
    role : "SDE"
}

let b = {
    run: () => {
        console.log("run");
    },

    stop:() => {
      console.log("stop");  
    }
}

a.__proto__ = b;

console.log(a);
a.run()
a.stop()
console.log(b.name);
b.run()


// ******* class & objects *********
class RailwayForm{
    constructor (name,trainNo) {
        this.name = name;
        this.trainNo = trainNo;
    }

    submit(){
        console.log(`${this.name} your form is subitted for train no ${this.trainNo}`);
    }

    cancel(){
        console.log(`${this.name} your form is canceled for train no ${this.trainNo}`);
    }
}

const dev = new RailwayForm("Dev",123123);
dev.submit();

const kishan =  new RailwayForm("Kishan",234234);
kishan.submit();

// cancel the form
dev.cancel();
kishan.cancel();


// *********** inhertance ***************

class Animal{
    constructor(name,color){
        this.name = "animal";
        this.color = color
    }

    run(){
        console.log(`${this.name} is running!!`);
    }

    shout(){
        console.log(`${this.name} is shouting!!`);
    }
      eatBanana(){
            console.log(`${this.name} is eating banana!!`);
        }
}


class Monkey extends Animal{
    constructor(){
         this.name = "monkey"
     }
}

const ani = new Animal("Tiger","white")
const m = new Monkey("Chimpanji","Black");

ani.run();
m.run();
m.shout();
m.eatBanana();


// ********** Super keyword *********
class Employee{
    constructor(name){
        this.name = name;
    }

    logedIn(){
        console.log(`${this.name} is logedIn`);
    }

    logedOut(){
        console.log(`${this.name} is logedOut`);
    }

    requestLeaves(leaves){
        console.log(`${this.name} your ${leaves} days leaves has been approved`);
    }
}

class Programmerr extends Employee{
    requestLeaves(leaves){
        super.requestLeaves(leaves);
        console.log(`also one extra leave has been approved`);
    }
}

const pr = new Programmerr("Dev");
pr.logedIn();
pr.requestLeaves(3);
pr.logedOut();


// ********** static methods ***********
class Animal{
    get animal_name(){
        return this.name;
    }

    set animal_name(name){
        this.name = Animal.capitalize(name);
    }

    walk(){
        console.log(`${this.name} is walking`);
        Animal.run();
    }

    static run(){
        console.log(`${this.name} is runing`);
    }



    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1);
    }
}


const ani2 = new Animal();
ani2.animal_name = "lion"
ani2.walk()

console.log(ani2.animal_name);