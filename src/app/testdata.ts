import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booktest } from './booktest';

export class Testdata implements InMemoryDbService {
  createDb() {
    let Deatilsbook: Booktest[] = [
      {
        id: 101,
        name: 'Angular 12',
        category: 'Angular Books',
        year: '2020',
      },
      { id: 102, name: 'Angular 11', category: 'Angular Books', year: '2020' },
      { id: 103, name: 'Angular 10', category: 'Angular Books', year: '2019' },
      { id: 104, name: 'Angular 9', category: 'Angular Books', year: '2018' },
      { id: 105, name: 'Angular 8', category: 'Angular Books', year: '2017' },

      { id: 201, name: 'React', category: 'React Books', year: '2017' },
      // {
      //   id: 301,
      //   name: 'Flutter',
      //   category: 'Flutter Books',
      //   year: '2020',
      // },
      // { id: 401, name: 'PHP', category: 'PHP Books', year: '2010' },
      // { id: 501, name: 'Node Js', category: 'Node Books', year: '2012' },
      // {
      //   id: 601,
      //   name: 'Express Js',
      //   category: 'Express Books',
      //   year: '2016',
      // },
      // {
      //   id: 701,
      //   name: 'Data Science ',
      //   category: 'Data Science Books',
      //   year: '2014',
      // },
    ];
    return { books: Deatilsbook };
  }
}
