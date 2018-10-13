import {Component, Input, OnInit} from '@angular/core';
import {DSModel} from '../model/ds-model';
import {ConstraintItem} from '../utils/constraint-item';

@Component({
  selector: 'app-ds-model',
  templateUrl: './ds-model.component.html',
  styleUrls: ['./ds-model.component.css']
})
export class DsModelComponent implements OnInit {

  @Input()
  dsModel: DSModel;

  items: ConstraintItem[];

  toFormItems(): ConstraintItem[] {
    const items = [];
    if (this.dsModel.constraints) {
      for (const constraint of this.dsModel.constraints) {
        const options = {
          value: constraint,
          key: this.dsModel.name,
          label: constraint.name,
          required: true,
        };
        const c = new ConstraintItem(options);
        items.push(c);
      }
    }
    return items;
  }
  constructor() { }

  ngOnInit() {
    this.items = this.toFormItems();
    console.log(this.items);
  }

}
