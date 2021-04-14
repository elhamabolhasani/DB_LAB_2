import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import BookId from './dto/bookId.dto';
import BookWtihIdDto from './dto/bookWithId.dto';
export declare class BooksController {
    private readonly bookServices;
    constructor(bookServices: BooksService);
    postBooks(books: CreateBookDto): Promise<import("../db/entity/book.entity").default>;
    deleteBooks(books: BookId): Promise<import("../db/entity/book.entity").default>;
    getAll(): Promise<import("../db/entity/book.entity").default[]>;
    putBooks(books: BookWtihIdDto): Promise<import("../db/entity/book.entity").default>;
}
