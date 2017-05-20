import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class ItemView {
  @bindable item;
  @bindable rendered = undefined;
  @bindable removed = undefined;
  widget = {};
  constructor() {
  }
  attached() {
    if (typeof (this.rendered) == "function")
      this.rendered(this.item);

  }
  removeItem() {
    if (typeof (this.rendered) == "function")
      this.removed(this.item);
  }
}
