import { Component, OnInit, OnDestroy } from '@angular/core';

// tslint:disable-next-line: import-blacklist
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
        .pipe(
          retry(2),
          map((resp: any) => {
            return resp.valor;
          }),
          filter( (valor, index) => {
            if ( (valor % 2) === 1 ) {
              return true;
            } else {
              return false;
            }
          })
        )
        .subscribe(
          numero => console.log('Subs ', numero),
          error => console.error('Error ', error),
          () => console.log('El observable terminó')
       );

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {

      let contador = 0;
      const intervalo = setInterval( () => {
        contador += 1;
        const salida = { valor: contador};

        observer.next(salida);

        /* if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        } */

        /* if (contador === 2) {
          observer.error('Prfobando error ...');
        } */
      }, 500);

    });
  }

}
