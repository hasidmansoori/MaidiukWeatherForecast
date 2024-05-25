import { Pipe, PipeTransform } from '@angular/core';   
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secret'
})
export class AscSecretPipe implements PipeTransform {

  transform(item: string): any {
    if (!item || item === '') {
      return '';
    } else
      return '************';
  }
} 

 
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}