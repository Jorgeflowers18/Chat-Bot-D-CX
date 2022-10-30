import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';
import { DynCmpComponent } from '../dyn-cmp/dyn-cmp.component';
declare var formComponent: any;
@Component({
  selector: 'app-timer-cmp',
  templateUrl: './timer-cmp.component.html',
  styleUrls: ['./timer-cmp.component.scss'],
  providers: [[TimerService]],
})
export class TimerCmpComponent implements OnInit {
  time: string | undefined;
  
  // decorador para leer ViewContainer con cada función
  @ViewChild('messageContainer', {
    read: ViewContainerRef,
  })
  // Conteneder de acciones de vista de componente
  alertContainer!: ViewContainerRef;
  // Contenedor del componente
  componentRef!: ComponentRef<DynCmpComponent>;
  // Status del componente
  
  status!: string;
  constructor(
    private timerService: TimerService,
    private viewContainer: ViewContainerRef,
    
    
  ) {}
  ngOnInit(): void {
    this.timerService.timer.subscribe((data) => {
      this.time = data;
      formComponent = TimerCmpComponent;
    });
  }
  /**
   * Procedimiento de ComponentFactories
   */ 

  ind_cmp = 0

  public createCmp(componentname: string): void {
    
    if (componentname == 'activate') {
      // this.ind_cmp = this.ind_cmp + 1
      this.status = 'on'; 
      alert(componentname + ' ' + 'Componente' + ' ' + 'creado correctamente.')
      const component = this.viewContainer.createComponent(DynCmpComponent)
      
    }  else {
      null
    }
  }
  public clearCmp(): void {
    this.status = 'off' 
    this.viewContainer.clear();
    alert('component' + ' ' + 'destroy successfully');
  }
  public destroyCmp(): void {
    // DEstrucción del componente dinámico
    //this.status = 'off' 
    this.viewContainer.remove();
    alert('component' + ' ' + 'destroy successfully');
    
  }

  public waitBot(wait: number){
    let response = 200
    this.viewContainer.remove();
    return response
  }
}
