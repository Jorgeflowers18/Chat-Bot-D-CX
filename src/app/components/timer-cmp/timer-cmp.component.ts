import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { ApiDcxService } from 'src/app/services/api-dcx.service';
import { TimerService } from 'src/app/services/timer.service';
import { DynCmpComponent } from '../dyn-cmp/dyn-cmp.component';
declare var formComponent: any;

//declare var GoogleAuth;
@Component({
  selector: 'app-timer-cmp',
  templateUrl: './timer-cmp.component.html',
  styleUrls: ['./timer-cmp.component.scss'],
  providers: [[TimerService]],
})
export class TimerCmpComponent implements OnInit {
  time: string | undefined;

  // Conteneder de acciones de vista de componente
  //alertContainer!: ViewContainerRef;
  // Contenedor del componente
  //componentRef!: ComponentRef<DynCmpComponent>;
  // Status del componente
  status!: string;
  constructor(
    private timerService: TimerService,
    private viewContainer: ViewContainerRef,
    private apiSrv: ApiDcxService
  ) {}

  ngOnInit(): void {
    this.timerService.timer.subscribe((data) => {
      this.time = data;
      // formComponent = TimerCmpComponent;
    });
  }
  ind_cmp = 0;

  public createCmp(componentname: string): void {
    if (componentname == 'activate') {
      // this.ind_cmp = this.ind_cmp + 1
      this.status = 'on';
      alert(componentname + ' ' + 'Componente' + ' ' + 'creado correctamente.');
      const component = this.viewContainer.createComponent(DynCmpComponent);
    } else {
      null;
    }
  }

  public clearCmp(): void {
    this.status = 'off';
    this.viewContainer.clear();
    alert('component' + ' ' + 'destroy successfully');
  }
  public destroyCmp(): void {
    // DEstrucción del componente dinámico
    this.status = 'off';
    this.viewContainer.remove();
    alert('component' + ' ' + 'destroy successfully');
  }
}
