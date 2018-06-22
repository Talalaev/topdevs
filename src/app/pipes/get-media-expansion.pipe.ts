import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getMediaExpansion'
})
export class GetMediaExpansionPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('/')[1];
  }

}
