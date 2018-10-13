import {ItemBase} from './base-item';
import {Constraint} from '../model/constraint';

export class ConstraintItem extends ItemBase<Constraint> {
  controlType = 'textbox-constraint';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
