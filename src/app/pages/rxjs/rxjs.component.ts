import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable()
        .retry(2)
        .subscribe(
        numero => {
          return console.log('Subs -> ', numero );
        },
        error => console.error('Error en el observable ', error),
        () => console.log('El observable terminó.!')
    );

  }

  ngOnInit(): void {
  }

  regresaObservable(): Observable<number> {

    return new Observable(observer => {

      let contador = 0;

      // tslint:disable-next-line: prefer-const
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);

        if (contador === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {

          observer.error('Start again. !!!');
        }

      }, 1000);

    })

  }

}
