import {
  Component,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dyn-cmp',
  templateUrl: './dyn-cmp.component.html',
  styleUrls: ['./dyn-cmp.component.scss'],
})
export class DynCmpComponent {
  @Input() cmp_status!: string
  constructor(){
    console.log(this.cmp_status)
  }
}
