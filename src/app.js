import 'gridstack.jQueryUI';
import gridstack from 'gridstack';

export class App {
  items = [];
  constructor() {
    this.message = 'Hello World!';

    this.items.push(new Item(0,0,4,2, 'first'));
    this.items.push(new Item(4,0,4,4, 'second'));
    this.items.push(new Item(8,0,2,2, 'foo'));
    this.items.push(new Item(10,0,2,2, 'bar'));  
  }

  attached() {
    this.options = {
      cellHeight: 80,
      verticalMargin: 10
    };
    $('.grid-stack').gridstack(this.options);
  }

  lastAddTop = 2;
  addItem(){
    let content = 'new item ' + this.items.length;
    this.items.push(new Item(0,this.lastAddTop,2,2, content));
    this.lastAddTop +=2;
    
    setTimeout(function() {
      $('.grid-stack').gridstack(this.options);
    }, 200);
  }
}

class Item{
  constructor(x, y, width, height, content){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.content = content;
  }
}