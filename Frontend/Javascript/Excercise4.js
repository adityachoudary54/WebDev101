/*
create a class Library and implement the following:
constructor must take book list as an argument
getBookList()
issueBook(bookname)
returnBook(bookname)
*/
class Library{
    constructor(booklist){
        this.booklist=booklist;
    }
    getBookList(){
        return this.booklist;
    }
    issueBook(bookname){
        if(this.booklist.includes(bookname)){
            console.log(`${bookname} has been issued`);
            this.booklist.splice(this.booklist.indexOf(bookname),1);
        }
        else{
            console.log(`${bookname} not available`);
        }
    }
    returnBook(bookname){
        this.booklist.push(bookname);
    }
}
let lib=new Library([]);
console.log(lib);
