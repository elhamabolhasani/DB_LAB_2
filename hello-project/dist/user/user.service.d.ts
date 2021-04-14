import UserEntity from '../db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/entity/book.entity';
export declare class UserServices {
    insert(userDetails: CreateUserDto): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    getBooksOfUser(userID: number): Promise<BookEntity[]>;
}
