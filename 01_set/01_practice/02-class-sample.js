class Parent {
    constructor(firstName, lastName, country, title) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.title = title;
    }

    getPersonInfo() {
        return `${this.firstName} ${this.lastName}, a ${this.title} developer based in ${this.country}`;
    }

    parentMethod() {
        //some stuff code
    }
}


class Child extends Parent {
    constructor(firstName, lastName, country, title, skills) {
        super(firstName, lastName, country, title)
        this.skills = skills;

        //we bind the child params with the this keyword to this child object
    }

    getSkills() {
        let len = this.skills.length;
        return len > 0 ? this.skills.join(' ') : 'No skills found'
    }

    childMethod() {
        //code goes here
    }
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const p1 = new Parent('Fahaad', 'Abbadi', 'India', 'Instructor');
const child = new Child(
    'Fahaad',
    'Abbadi',
    'Indian',
    'Instructor',
    skills
)