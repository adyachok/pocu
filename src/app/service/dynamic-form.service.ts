import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ItemBase} from '../utils/base-item';

@Injectable()
export class DynamicFormControlService {
  constructor() { }

  toFormGroup(item: ItemBase<any>[] ) {
    const group: any = {};

    item.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
