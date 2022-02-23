import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tets',
  templateUrl: './tets.component.html',
  styleUrls: ['./tets.component.css']
})
export class TetsComponent implements OnInit {

date: string = new Date().toDateString();
tehnologien = ["Angular", "CSS", "Bootstrap", "HTML", "TS"];

input:string = '';
 result:string = '';

  constructor() { }


  ngOnInit(): void {
  }

  pressNum(num: string) {

    //Check floating point numbers. no more than one point.
    //проверка чисел с плавающей точкой. не более одной точки.
    if (num==".") {
      if (this.input !="" ) {
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }

//variable mapping
//отображение переменных
    this.input = this.input + num
    this.calcAnswer();
  }

  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }


//Sie können ++, -- oder ** nicht wiederholen.
//нельзя повторять ++, --, или **
  pressOperator(op: string) {
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
    this.input = this.input + op
    this.calcAnswer();
  }




  clear() {
    if (this.input !="" ) {
      this.input=this.input.substr(0, this.input.length-1)
    }
  }

  allClear() {
    this.result = '';
    this.input = '';
  }

  calcAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
    lastKey = formula[formula.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
    console.log("Formula " +formula);
    this.result = eval(formula);
  }


  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }
}
