import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../../../common/interfaces';

@Pipe({ name: 'filterBrand' })
export class FilterBrandPipe implements PipeTransform {

  transform(brands: Brand[], search: string): Brand[] {
    const filtered: Brand[] = brands.filter(brand => brand.name.toLowerCase().indexOf(search.toLowerCase()));

    return filtered;
  }

}
