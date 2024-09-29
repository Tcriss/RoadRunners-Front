import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'CloudinaryUrl' , standalone: true })
export class CloudinaryRelativePath implements PipeTransform {
  transform(url: string): string {
    return url.replace('http://res.cloudinary.com/ddbfujz4g/image/upload/', '');
  }
}
