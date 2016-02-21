import {Component, View} from 'angular2/core';
import {FormBuilder,ControlGroup} from 'angular2/common';
//import {User} from 'user';

export class User {
  constructor (
    public name?: string,
    public email: string,
    public phone?: string,
    public message: string
  )
}

@Component({
  selector: 'signup'
})

@View({
  templateUrl: 'signup.html'
})

export class Signup {
  user: User;
  group: ControlGroup;
  constructor(builder: FormBuilder) {
    console.info('Signup Component Mounted Successfully');
    this.group = builder.group({
      name: [''],
      email: [''],
      phone: [''],
      message:['']
    });
  }

  onSubmit() {
    console.log(this.group.value);
  }
}
