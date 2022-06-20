import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    
  
    


    @Output() onEnter :EventEmitter<string> = new EventEmitter
    termino:string ='';

    @Output() onDebounce: EventEmitter<string> = new EventEmitter

    debouncer: Subject<string>= new Subject;

    @Input() predef:string = 'Placeholder';

    ngOnInit(){
      this.debouncer
      .pipe(
        debounceTime(200)
      )
      .subscribe( valor =>{
        this.onDebounce.emit(valor);
      })
    }


    buscar(){
        this.onEnter.emit( this.termino);

        
    }

    pressKey( event:any){
      const valor = event.target.value;

      this.debouncer.next(valor);

    }

}
