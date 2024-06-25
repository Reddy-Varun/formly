import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-component',
  templateUrl: './formly-component.component.html',
  styleUrls: ['./formly-component.component.scss']
})
export class FormlyComponentComponent {
  @Input() formFields: FormlyFieldConfig[] = [];

  form = new FormGroup({});
  model :any= {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.form = new FormGroup({});
    this.model = {};
    this.fields = [];
    setTimeout(()=>{
      this.fields = this.formFields
    }, 100)
  }

  submit() {
     if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
