import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
  styleUrls: ['./expired.component.css']
})
export class ExpiredComponent implements OnInit {
  products = [];
  errorMessage: string | undefined;
  name: any;
  id: any;
  key: any;
  constructor(
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    // this.commonService.getProducts().subscribe(
    //   (data: any[]) => {
    //     this.products = data;
    //   },
    //   (error) => (this.errorMessage = <any>error)
    // );
  }


  save() {
    // this.modalRef.hide();
  }

  deleteProduct() {
    // this.products = this.products.filter((a) => a.id !== this.id);
    // this.commonService.deleteProduct(this.id).subscribe((data: any[]) => {
    //   // this.modalRef.hide();
    //   this.getProducts();
    // });
  }

  decline() {
    // this.modalRef.hide();
  }
}
