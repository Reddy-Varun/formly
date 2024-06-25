import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormlyServiceService } from './services/formly-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'formly';
  form: any = [];

  name = new FormControl('');

  constructor(private formlyService: FormlyServiceService) {}

  ngOnInit(): void {
    this.getForm('form-one');
  }

  getForm(value: string) {
    this.formlyService.getForm(value).subscribe((res) => {
      this.form = res;
    });
  }

  onDropdownChange(event: any): void {
    const selectedValue = event.target.value;
    this.getForm(selectedValue);
  }
}
