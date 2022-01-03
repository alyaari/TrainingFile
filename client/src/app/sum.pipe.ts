import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(data: any[], args?: any): any {
    var s=0;
    debugger
data.forEach(a=>{
  s+=a[args];
})
    return s;
  }

}
