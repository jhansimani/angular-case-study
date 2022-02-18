import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    value: any,
    order: string,
    field: string,
    compareField: string
  ): any {
    if (order === 'ascending') {
      return value.sort((a: any, b: any) => {
        if (a[field] > b[field]) {
          return 1;
        } else if (a[field] < b[field]) {
          return -1;
        }
        if (a[field] === b[field]) {
          return a[compareField] < b[compareField] ? -1 : 1;
        }
        return 0;
      });
    } else if (order === 'descending') {
      return value.sort((a: any, b: any) => {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        }
        if (a[field] === b[field]) {
          return a[compareField] > b[compareField] ? -1 : 1;
        }
        return 0;
      });
    } else {
      return value;
    }
  }
}
