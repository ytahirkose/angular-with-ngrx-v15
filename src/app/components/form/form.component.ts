import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {selectGetApps} from "../../state/app.selectors";
import {State} from "../../state/app.reducer";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  color: undefined | string;
  newForm: FormGroup | undefined;
  currentURL: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>) {
    this.createNewForm()
  }

  ngOnInit(): void {
    this.currentURL = window.location.href;
    this.store.pipe(select(selectGetApps)).subscribe(item => {
      this.color = item.color
    });
  }

  createNewForm() {
    this.newForm = this.formBuilder.group({
      field_1: ['', Validators.required],
      field_2: ['', Validators.required],
      field_3: ['', Validators.required],
      field_4: ['', Validators.required]
    });
  }

  addForm() {
    if (this.newForm?.valid) {
      if (this.currentURL.split('/')[this.currentURL.split('/').length - 1] == 'one') {
        this.router.navigate(['two']);
      } else {
        this.router.navigate(['one']);
      }
    }
  }
}
