import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  isMaximum: boolean;
  gridStack: any;

  constructor(private cd: ChangeDetectorRef) {
    this.isMaximum = false;
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
    $('.grid-stack').gridstack(this.options);
    
    // let grid = $('.grid-stack').data('gridstack');
    // grid.makeWidget('test-grid');
  }

  ngAfterViewChecked() {
    this.gridStack = $('.grid-stack').data('gridstack');
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
