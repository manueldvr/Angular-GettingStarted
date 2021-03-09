import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    productListTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
    },{
        "productId": 2,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "March 21, 2019",
        "description": "Curve claw steel hammer",
        "price": 321.229,
        "starRating": 1.2,
        "imageUrl": "assets/images/hammer.png"
    }
    ];


    ngOnInit() : void {
        console.log('In OnInit');

    }

    getProductListTitle() : string {
        return this.productListTitle;
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}