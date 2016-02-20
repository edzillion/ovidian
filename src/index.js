import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import * from 'ng2-bootstrap/ng2-bootstrap';
import {Ovidian} from 'ovidian';


@Component({
  selector: 'main'
})

@View({
  directives: [Ovidian],
  template: `
    <ovidian></ovidian>
  `
})

class Main {

}

bootstrap(Main);
