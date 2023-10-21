class LibraryCollection {

    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.capacity == 0) {
            throw new Error("Not enough space in the collection.")
        }

        let book = {
            bookName,
            bookAuthor,
            payed: false
        }

        this.capacity--;
        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let findBook = this.books.find(x => x.bookName == bookName);
        if (!findBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (findBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        findBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let findBook = this.books.find(x => x.bookName == bookName);

        if (!findBook) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!findBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.indexOf(findBook);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;

    }

    getStatistics(bookAuthor) {
        let output = [];
        if (!bookAuthor) {
            output.push(`The book collection has ${this.capacity} empty spots left.`);
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            this.books.forEach(x => {
                let buff = x.payed ? "Has Paid" : "Not Paid";
                output.push(`${x.bookName} == ${x.bookAuthor} - ${buff}.`)
            });

            return `${output.join("\n")}`;

        } else {

            let findAuthor = this.books.filter(x => x.bookAuthor == bookAuthor);

            if (findAuthor.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            findAuthor.forEach(x => {
                let buff = x.payed ? "Has Paid" : "Not Paid";
                output.push(`${x.bookName} == ${x.bookAuthor} - ${buff}.`)
            })

            return `${output.join("\n")}`;
        }
    }
}










const library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));



