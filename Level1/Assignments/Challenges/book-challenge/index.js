
// es5
function Book(title, author, year){
    this.title =  title;
    this.author = author;
    this.year = year;
    this.getDetails = function(){
        return "Title:" + " " + this.title + "," + " " + "Author:" + " " + this.author+ "," + " " +"Year:" +"  " + this.year;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails());
console.log(book1)
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails());

// es6
class Book2{
    constructor(title){
        this.title = title
    }

    getDetails(){

    }
}