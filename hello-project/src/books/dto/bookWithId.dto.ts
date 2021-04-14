export default class CreateBookDto {
  readonly name: string;
  readonly userID: number;
  readonly genreIDs: number[];
  readonly bookId: number;
}