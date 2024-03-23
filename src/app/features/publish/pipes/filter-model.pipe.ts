import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterModel', standalone: true })
export class FilterModelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
