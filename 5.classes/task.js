class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state = this.state * 1.5;
		return this.state;
	}
	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state
		}
		return this._state;
	}
	get state() {
		return this._state;
	}

}


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}


class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}


class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
		return this.books;
	}

	findBookBy(type, value) {
		let result = this.books.find((book) => book[type] === value);
		if (result) {
			return result;
		}
		return null;
	}

	giveBookByName(bookName) {
		let result = this.books.find((book) => book.name === bookName);
		if (result) {
			this.books = this.books.filter((book) => book.name !== bookName);
			return result;
		}
		return null;
	}
}


const library = new Library("Библиотека имени Пушкина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Три мушкетёра",
		1919,
		508
	)
);
library.addBook(
	new FantasticBook(
		"Виктор Пелевин",
		"Путешествие в Элевсин",
		2023,
		365
	)
);

library.addBook(
	new NovelBook(
		"Герберт Уэллс",
		"Машина времени",
		1895,
		138
	)
);


library.addBook(
	new Magazine(
		"Мурзилка",
		1924,
		60
	)
);

console.log(library.findBookBy("releaseDate", 1919).name);
library.giveBookByName("Три мушкетёра");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Три мушкетёра", 1919, 508));


console.log(library.books);