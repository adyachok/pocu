import {Component, Input, OnInit} from '@angular/core';
import {ItemBase} from '../utils/base-item';
import {FormGroup} from '@angular/forms';
import {DynamicFormControlService} from '../service/dynamic-form.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() items: ItemBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: DynamicFormControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.items);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
