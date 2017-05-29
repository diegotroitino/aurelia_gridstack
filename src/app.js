import { observable } from 'aurelia-framework';
import gridstack from 'gridstack';
import 'gridstack.jQueryUI';
import { Item } from './item';


export class App {
  items = [];
  lastId = 0;
  constructor() {
    this.items.push(new Item(this.lastId++, 0, 0, 4, 2, 'first'));
    this.items.push(new Item(this.lastId++, 4, 0, 4, 4, 'second'));
    this.items.push(new Item(this.lastId++, 8, 0, 2, 2, 'foo'));
    this.items.push(new Item(this.lastId++, 10, 0, 2, 2, 'bar'));
  }

  refreshItems(widgets){
    for (let i in widgets) {
        var widget =  widgets[i];
        var currentItem = this.items.find(a => { return a.id == widget.id });
        currentItem.x = widget.x;
        currentItem.y = widget.y;
        currentItem.width = widget.width;
        currentItem.height = widget.height;                
    }
  }
  
  attached() {
    this.options = {
      cellHeight: 80,
      verticalMargin: 10,
      auto: false,
    };
    
    $('.grid-stack').gridstack(this.options);    

    $('.grid-stack').on('change', (event, items) => {
        this.refreshItems(items);
    });
    
  }

  printItens() {
    console.log(this.items);
  }

  addItem() {
    let content = 'new item ' + this.lastId;
    var newItem = new Item(this.lastId++, 0, 0, 2, 2, content);
    this.items.push(newItem);
  }

  itemAttached(item) {
    let DOMReference = item.DOMref;
    let grid = $('.dynamic-grid-stack').data('gridstack');
    grid.makeWidget(DOMReference);    
  }

  itemRemoved(item){
    var index = this.items.indexOf(item);
    if (index > -1){
      let grid = $('.dynamic-grid-stack').data('gridstack');
      grid.removeWidget(item.DOMref);
      this.items.splice(index, 1);      
    }
  }
}
