import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bookweb } from './bookweb';

export class Testdb implements InMemoryDbService {
  createDb() {
    let bookDeatils: Bookweb[] = [
      { id: 101, name: 'Angular 12', category: 'Angular Books' },
      { id: 102, name: 'Angular 11', category: 'Angular Books' },
      { id: 103, name: 'Angular 10', category: 'Angular Books' },
      { id: 104, name: 'Angular 9', category: 'Angular Books' },
      { id: 105, name: 'Angular 8', category: 'Angular Books' },
      { id: 106, name: 'Angular 7', category: 'Angular Books' },
      { id: 201, name: 'React', category: 'React Books' },
      { id: 301, name: 'Flutter', category: 'Flutter Books' },
      { id: 401, name: 'PHP', category: 'PHP Books' },
      { id: 501, name: 'Node Js', category: 'Node Books' },
      { id: 601, name: 'Express Js', category: 'Express Books' },
    ];
    return { books: bookDeatils };
  }
}
