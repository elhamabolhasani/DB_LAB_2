import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
export declare class BooksController {
    private readonly bookServices;
    constructor(bookServices: BooksService);
    postBooks(books: CreateBookDto): Promise<import("../db/entity/book.entity").default>;
    getAll(): Promise<import("../db/entity/book.entity").default[]>;
}
