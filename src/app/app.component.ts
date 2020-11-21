import { Component } from '@angular/core';

import { Subject } from 'rxjs';  // Step 1 of 11 ParentClick-ChildCount

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  parentTxtValue: String;     // Step 3 of 6 Parent-to-Child
  parentClick:Subject<void> = new Subject<void>(); // Step 2 of 11 ParentClick-ChildCount
  childTextBoxValue: String;  //  Step 9 of 11 Child-to-Parent

  onParentButtonClick() {   // Step 4 of 11 ParentClick-ChildCount
    this.parentClick.next();
  }

  updateInChildValue(event) {   //  Step 10 of 11 Child-to-Parent
    this.childTextBoxValue = event;

  }
}
