class User {
    static method() {
        console.log(this === User);
    }
}

User.method();


class User2 {
}

User2.method = function () {
    console.log(this === User);
}

User2.method()

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static  compare(article1, article2) {
        return article1.date - article2.date;
    }
    static create() {
        return new this("great",new Date());
    }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare);
console.log(articles[0].title);
//console.log(Article.title)
Article.create();
console.log(Article.create().title);