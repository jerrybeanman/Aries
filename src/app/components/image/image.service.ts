import { Image } from './image.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

    constructor() { }

    public getImages() : Image[] {
        let images: Image[] = [
            { 
                "title": "We are first", 
                "desc": "Morbi imperdiet bibendum justo eget efficitur.",
                "url": "assets/images/first.jpg" 
            },
            { 
                "title": "We are second", 
                "desc": "Maecenas tristique hendrerit sem non condimentum.",
                "url": "assets/images/second.jpg" 
            },
            { 
                "title": "We are third", 
                "desc": "Aliquam rutrum sem scelerisque, imperdiet ipsum ac, faucibus quam.",
                "url": "assets/images/third.jpg" 
            }
        ];
        return images; 
    }
}