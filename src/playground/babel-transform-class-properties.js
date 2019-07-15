class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getOldGreeting = this.getOldGreeting.bind( this );
    }
    getOldGreeting() {
        return `Hi, My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
const getOldGreeting = oldSyntax.getOldGreeting;
console.log( getOldGreeting() );

// ---------------

class NewSyntax {
    name = 'Jen';
    getNewGreeting = () => {
        return `Hi, My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getNewGreeting;
console.log( newGetGreeting() );