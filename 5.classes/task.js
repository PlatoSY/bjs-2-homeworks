class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    this._state = newState;
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      return this._state;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = 'magazine';
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = 'book';
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'novel';
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'fantastic';
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'detective';
  }
}

// 2

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let result = this.books.find(
      (searchedBook) => value === searchedBook[type]
    );
    if (result) {
      return result;
    } else {
      return null;
    }
  }
  giveBookByName(bookName) {
    let index = this.books.findIndex((item) => item.name === bookName);
    if (index !== -1) {
      let deletedBook = this.books.splice(index, 1);
      return deletedBook[0];
    } else {
      return null;
    }
  }
}

//3

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}
/*getMark(mark) {
    let this.mark 
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};
set marks(newMark) {
    this.marks = newMark;

}*/
