import {Component, View} from 'angular2/core';
import * as ss from 'ng-smooth-scroll';
import {{Signup}} from 'signup';

@Component({
  selector: 'ovidian',
  directives: [Signup]
})

@View({
  templateUrl: 'ovidian.html'
})

export class Ovidian {

  constructor(public signup: Signup) {
    console.info('Ovidian Component Mounted Successfully');

  }

}
