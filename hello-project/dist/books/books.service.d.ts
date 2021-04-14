import BookEntity from '../db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
import BookId from './dto/bookId.dto';
import BookWtihIdDto from './dto/bookWithId.dto';
export declare class BooksService {
    delete_b(bookDetails: BookId): Promise<BookEntity>;
    put_b(bookDetails: BookWtihIdDto): Promise<BookEntity>;
    insert(bookDetails: CreateBookDto): Promise<BookEntity>;
    getAllBooks(): Promise<BookEntity[]>;
}
