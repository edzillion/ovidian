import {Component, View} from 'angular2/core';
import * as ss from 'ng-smooth-scroll';
import {Signup} from 'signup';

@Component({
  selector: 'ovidian',
  directives: [Signup]
})

@View({
  templateUrl: 'ovidian.html'
})

export class Ovidian {

  constructor(signup: Signup) {
    console.log('gggg',signup);
    console.info('Oviddddddddddddian Component Mounted Successfully');

  }

}
