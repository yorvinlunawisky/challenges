import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Property '...' has no initializer and is not definitely assigned in the constructor (I used an exclametion mark because of that. See below).

  @ViewChild('f') currencyForm!: NgForm;
  firstCurrency = 0;
  secondCurrency = [56.57, 0.87, 1.14, 0.015 ];
  result = 0;

 

  // onSubmit(form: HTMLFormElement) {
  //   console.log(form);
  // }

//   onSubmit(form: NgForm) {
//     console.log(form);
//   }

    onSubmit() {
      this.firstCurrency = this.currencyForm.value.amount;
        if (this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'dollar' && this.currencyForm.value.secondValue === 'peso') {
          this.result =this.firstCurrency * 55.25
        }  else if  (this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'dollar' && this.currencyForm.value.secondValue === 'euro') {
          this.result =this.firstCurrency * 0.87
        }    
           else if  (this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'euro' && this.currencyForm.value.secondValue === 'peso') {
          this.result =this.firstCurrency * 65.95
        } 
          else if  (this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'euro' && this.currencyForm.value.secondValue === 'dollar') {
          this.result =this.firstCurrency * 1.14
        } else if  (this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'peso' && this.currencyForm.value.secondValue === 'dollar') {
          this.result = this.firstCurrency * 0.049
        } else if  (this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'peso' && this.currencyForm.value.secondValue === 'euro') {
          this.result =this.firstCurrency * 0.017
        }
              //Same currencies
          else if ((this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'peso' && this.currencyForm.value.secondValue === 'peso')) {
            this.result =this.firstCurrency * 1
        } else if ((this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'dollar' && this.currencyForm.value.secondValue === 'dollar')) {
             this.result =this.firstCurrency * 1
        } else if ((this.firstCurrency > 0 && this.currencyForm.value.firstValue === 'euro' && this.currencyForm.value.secondValue === 'euro')) {
            this.result = this.firstCurrency * 1
        }
      
    
    }
}


