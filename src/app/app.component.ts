import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, ChangeDetectorRef, ViewChildren, ViewChild, QueryList, Renderer, ElementRef } from '@angular/core';
import { GridStackItemComponent, GridStackComponent } from 'ng4-gridstack';
import { GridStackOptions } from 'ng4-gridstack';
import { GridStackItem } from 'ng4-gridstack';
import { CustomGridStackItem } from './custom-gridstack-item.model';
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

  @ViewChildren(GridStackItemComponent) items: QueryList<GridStackItemComponent>;
  @ViewChild('gridStackMain') gridStackMain: GridStackComponent;
  area: GridStackOptions = new GridStackOptions();
  widgets: GridStackItem[] = [];
  widgetsProperties: CustomGridStackItem[] = [];
  
  constructor(private cd: ChangeDetectorRef) {
    
  }

  AddWidget() {
    var widget = new GridStackItem();
    
    widget.width = 6;
    widget.height = 4;
    widget.x = 0;
    widget.y = 0;
    widget.marginWidth = '0';
    this.widgets.push(widget);      
    var customWidgetProperties = new CustomGridStackItem();
    customWidgetProperties.isFullScreen = false;
    this.widgetsProperties.push(customWidgetProperties);
    this.cd.detectChanges();
    
    var arr = this.items.toArray();
    this.gridStackMain.AddWidget(arr[this.items.length - 1]);
  }
  

  ngAfterViewInit(): void {
    // this.AddWidget();
    // $('.grid-stack').gridstack(this.options);
    
    // let grid = $('.grid-stack').data('gridstack');
    // grid.makeWidget('test-grid');
  }

  ngAfterViewChecked() {
    // this.gridStack = $('.grid-stack').data('gridstack');
  }
  
  maximum() {
    this.isMaximum = !this.isMaximum;
  }

  options = {
    cellHeight: 80,
    verticalMargin: 10
  };

  widget1 = {
    width:6,
    height:4,
    x:0,
    y:0,
    marginWidth:'0'
  }

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
