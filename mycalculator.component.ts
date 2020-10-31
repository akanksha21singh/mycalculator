import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycalculator',
  templateUrl: './mycalculator.component.html',
  styleUrls: ['./mycalculator.component.scss']
})
export class MycalculatorComponent implements OnInit {

  currentInput = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;
  constructor() { }

  public getNumber(number:string){
    console.log(number);
    if(this.waitForSecondNumber)
    
    {
      this.currentInput = number;
      this.waitForSecondNumber = false;
    }else{
      this.currentInput === '0'? this.currentInput = number: this.currentInput += number;

    }
  }

  getDecimal(){
    if(!this.currentInput.includes('.')){
        this.currentInput += '.'; 
    }
  }

  private doCalculation(op , secondOp){
    switch (op){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }

  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentInput);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentInput))
      this.currentInput = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);

  }

  public clear(){
    this.currentInput = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
  ngOnInit(): void {
  }

}

