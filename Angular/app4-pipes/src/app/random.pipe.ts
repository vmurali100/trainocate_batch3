import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
})
export class RandomPipe implements PipeTransform {
  transform(item: any, searchValue?: string | any) {

    return item.filter((obj: any) =>
      obj.fname.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  }
}
