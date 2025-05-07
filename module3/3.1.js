"use strict";
{
    // OOP Class
    class student {
        constructor(id, name, email) {
            (this.id = id), (this.name = name), (this.email = email);
        }
        theStudent() {
            console.log(`The Name of Student is ${this.name} and this email is ${this.email}`);
        }
    }
    const student1 = new student(1, "Pritom", "pritom@gmail.com");
    student1.theStudent();
}
