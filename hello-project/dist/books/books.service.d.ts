import BookEntity from '../db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
export declare class BooksService {
    insert(bookDetails: CreateBookDto): Promise<BookEntity>;
    getAllBooks(): Promise<BookEntity[]>;
}
