import BookEntity from '../db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UserEntity from '../db/entity/user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../db/entity/genre.entity';
import BookId from './dto/bookId.dto';
import BookWtihIdDto from './dto/bookWithId.dto';

export class BooksService {
  async delete_b(bookDetails : BookId): Promise<BookEntity> {
	  const { bookID } = bookDetails;
      const book = await BookEntity.findOne(bookID);
	  if (!book) {
		throw new Error(`The book with id: ${bookID} does not exist!`);
	  }

	  await book.remove();
	  return book;
  }

  async put_b(bookDetails: BookWtihIdDto): Promise<BookEntity> {
    const { name , userID , genreIDs , bookId} = bookDetails;
	const book = await BookEntity.findOne(bookId);
	  if (!book) {
		throw new Error(`The book with id: ${bookId} does not exist!`);
	  }	  
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  
	
  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }
}