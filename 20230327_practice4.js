Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@Shiho26Miyano 
ginny100
/
Meta-Front-End-Developer
Public
Fork your own copy of ginny100/Meta-Front-End-Developer
Code
Issues
Pull requests
1
Actions
Projects
Security
Insights
Meta-Front-End-Developer/Course 2 - Programming with JavaScript/Week 3 - Programming Paradigms/2.exercises/2.programming-assignment-building-an-object-oriented-program/ooprogramming.js /
@ginny100
ginny100 Reorder Week 3 of Course 2
Latest commit 408203f on Oct 8, 2022
 History
 1 contributor
43 lines (37 sloc)  903 Bytes

// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    slep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 10, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker('Bob', 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker('Alice', 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Meta-Front-End-Developer/ooprogramming.js at master · ginny100/Meta-Front-End-Developer