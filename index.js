//Parent class media
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    toggleCheckoutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRatings() {
      let ratingSum = this._ratings.reduce(
        (currentSum, rating) => currentSum + rating,
        0
      );
      let averageArray = this._ratings.length;
      return Math.floor(ratingSum / averageArray);
    }
  
    addRating(ratingValue) {
      this._ratings.push(ratingValue);
    }
  }
  //Subclass book
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._title = title;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  //subclass Movie
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  //Subclass CD
  class CD extends Media {
    constructor(title) {
      super(title);
      this._songs = [];
    }
    get songs() {
      return this._songs;
    }
    addSongs(song) {
      this._songs.push(song);
    }
  }
  const historyOfEverthing = new Book(
    "A short History of Nearly Everthing",
    "Bill Bryson",
    "544"
  );
  console.log(historyOfEverthing.title);
  console.log(historyOfEverthing.author);
  console.log(historyOfEverthing.pages);
  historyOfEverthing.addRating(5);
  historyOfEverthing.addRating(4);
  historyOfEverthing.addRating(5);
  console.log(historyOfEverthing.getAverageRatings());
  
  console.log(historyOfEverthing.ratings);
  historyOfEverthing.toggleCheckoutStatus();
  console.log(historyOfEverthing.isCheckedOut);
  
  const speed = new Movie("Speed", "Jan de Bont", "116");
  
  speed.toggleCheckoutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRatings());
  
  class libraryCatalog {
    constructor() {
      this._catalog = [];
    }
    get catalog() {
      return this._catalog;
    }
  }