import { Image } from './image.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

    constructor() { }

    public getImages() : Image[] {
        let images: Image[] = [
            { 
                "title": "Welcome to Aries Spa", 
                "desc": "Perfect place for women and men who seek stress relief and relaxation",
                "url": "assets/images/first.jpg" 
            },
            { 
                "title": "Welcome to Aries Spa", 
                "desc": "Urban spa destination in Vancouver with a clean and safe envrionment",
                "url": "assets/images/second.jpg" 
            },
            { 
                "title": "Welcome to Aries Spa", 
                "desc": "Profesionally trained massage therapists dedicated to your experience",
                "url": "assets/images/third.jpg" 
            }
        ];
        return images; 
    }
}