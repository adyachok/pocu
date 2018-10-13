import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ItemBase} from '../utils/base-item';

@Component({
  selector: 'app-dynamic-form-item',
  templateUrl: './dynamic-form-item.component.html',
  styleUrls: ['./dynamic-form-item.component.css']
})
export class DynamicFormItemComponent {

  @Input() item: ItemBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.item.key].valid; }

}
