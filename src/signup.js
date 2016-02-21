import {Component, View} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import {User} from 'user';

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
