import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitwords',
})
export class LimitwordsPipe implements PipeTransform {
  transform(
    value: any,
    limit: number = null,
    symbol: string = null,
    ...args: any[]
  ): any {
    let newlimit = limit != null ? limit : 10;
    let newsymbol = symbol != null ? symbol : '....';
    return value.length > newlimit
      ? value.substring(0, newlimit) + newsymbol
      : value;
  }
}
