import { Component, AfterViewInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { AppComponent } from '../app.component';
declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnChanges{
  isMaximum: boolean;
  gridStack: any;

  ngAfterViewInit(): void {
    
  }

  constructor(app: AppComponent) {
    this.isMaximum = false;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      this.gridStack = changedProp.currentValue;
      if(this.gridStack != undefined) {
        this.gridStack.addWidget($('<div><div class="grid-stack-item-content"></div></div>'), 0, 0, Math.floor(1 + 3 * Math.random()), Math.floor(1 + 3 * Math.random()), true);
      }
    }
  }

  maximum() {
    this.isMaximum = !this.isMaximum;
  }

  options = {
    cellHeight: 80,
    verticalMargin: 10
  };

    settings = {
        columns: {
          id: {
            title: 'ID'
          },
          name: {
            title: 'Full Name'
          },
          username: {
            title: 'User Name'
          },
          email: {
            title: 'Email'
          }
        }
      };
      data = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        },
        {
          id: 3,
          name: "Ervin Carrick",
          username: "Carrick",
          email: "Carrick@melissa.tv"
        },
        
        
        // ... list of items
        
        {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz"
        }
      ];
}