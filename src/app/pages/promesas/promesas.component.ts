import { Component, OnInit } from '@angular/core';
// import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
              msg => console.log('Terminó! ', msg)
            )
           .catch(
              error => console.error('Error: ', error)
            );
  }

  ngOnInit(): void {
  }

  contarTres() {

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise<boolean>((resolve, reject) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve( true );
          clearInterval(interval);
        }
      }, 1000);
    });

  }

}
