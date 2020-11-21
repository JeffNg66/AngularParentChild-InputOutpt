// Step 5 of 6 Parent-to-Child         // Step 6 of 11 Child-to-Parent
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import {Subject} from 'rxjs';     // Step 7 of 11 ParentClick-ChildCount

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input('parentText') parentTextBoxValue: String;  // Step 5 of 6 Parent-to-Child
  @Input() parentClick: Subject<void>;              // Step 6 of 11 ParentClick-ChildCount
  // Step 5 of 11 Child-to-Parent
  @Output('ontextFromChild') passToParent: EventEmitter<String> = new EventEmitter<String>(); 

  clickCount = 0;                   // Step 8 of 11 ParentClick-ChildCount
  childTextBoxValue:String;         // Step 2 of 11 Child-to-Parent

  constructor() { }

  ngOnInit() {
    this.parentClick.subscribe(() => this.incrementValue());      // Step 10 of 11 ParentClick-ChildCount
  }

  incrementValue() {               // Step 9 of 11 ParentClick-ChildCount
    this.clickCount = this.clickCount + 1;
  }
  
  passTextValueToParent() {         // Step 4 of 11 Child-to-Parent
    this.passToParent.emit(this.childTextBoxValue);   // Step 7 of 11 Child-to-Parent
  }
}
