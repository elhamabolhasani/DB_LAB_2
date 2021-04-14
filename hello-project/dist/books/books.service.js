"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const book_entity_1 = require("../db/entity/book.entity");
const user_entity_1 = require("../db/entity/user.entity");
const genre_entity_1 = require("../db/entity/genre.entity");
class BooksService {
    async delete_b(bookDetails) {
        const { bookID } = bookDetails;
        const book = await book_entity_1.default.findOne(bookID);
        if (!book) {
            throw new Error(`The book with id: ${bookID} does not exist!`);
        }
        await book.remove();
        return book;
    }
    async put_b(bookDetails) {
        const { name, userID, genreIDs, bookId } = bookDetails;
        const book = await book_entity_1.default.findOne(bookId);
        if (!book) {
            throw new Error(`The book with id: ${bookId} does not exist!`);
        }
        book.name = name;
        book.user = await user_entity_1.default.findOne(userID);
        book.genres = [];
        for (let i = 0; i < genreIDs.length; i++) {
            const genre = await genre_entity_1.default.findOne(genreIDs[i]);
            book.genres.push(genre);
        }
        await book.save();
        return book;
    }
    async insert(bookDetails) {
        const { name, userID, genreIDs } = bookDetails;
        const book = new book_entity_1.default();
        book.name = name;
        book.user = await user_entity_1.default.findOne(userID);
        book.genres = [];
        for (let i = 0; i < genreIDs.length; i++) {
            const genre = await genre_entity_1.default.findOne(genreIDs[i]);
            book.genres.push(genre);
        }
        await book.save();
        return book;
    }
    async getAllBooks() {
        return book_entity_1.default.find();
    }
}
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map