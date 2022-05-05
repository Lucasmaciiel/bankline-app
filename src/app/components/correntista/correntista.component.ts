import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {

  correntista:any;
  correntistas:any;
  nome:any;
  cpf:any;

  constructor(private correntistaService: CorrentistaService) { }

  ngOnInit(): void {
    this.exibirCorrentista();
  }

  exibirCorrentista(): void{
    this.correntistaService.list()
    .subscribe(
      data => {
        this.correntistas = data;
        console.log(data);
      },
      error =>{
        console.log(error);
      });
  }

  save(): void {
    console.log(this.correntista)
    const correntista = {
      cpf:this.cpf,
      nome:this.nome
    
    };
    console.log(correntista);

    this.correntistaService.create(correntista)
      .subscribe(
        response => {
          console.log(response);
          this.exibirCorrentista();
        },
        error => {
          console.log(error);
        });
  }
}
