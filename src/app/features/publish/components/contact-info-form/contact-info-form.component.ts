import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.scss']
})
export class ContactInfoFormComponent implements OnInit {

  @Input() formGroupName!: string;
  form!: FormGroup

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control.get(this.formGroupName) as FormGroup;
  }

}
