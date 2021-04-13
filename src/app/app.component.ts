import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Dicionario } from './dicionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dicionario: Dicionario = new Dicionario
  dicionarioLista: Dicionario[] = []
  checkWord = false

  checkList(palavra) {
    if (this.dicionarioLista.find(e => e.palavra === palavra)) {
      this.checkWord = true
    } else {
      this.checkWord = false
    }
  }

  submit(dicionarioForm) {
    let dicionarioArr = new Array()

    dicionarioArr.push({
      palavra: dicionarioForm.value.palavra,
      significado: dicionarioForm.value.significado
    })

    this.dicionarioLista.push(this.dicionario)

    this.dicionario = new Dicionario()
    dicionarioForm.resetForm()

    this.checkWord = false
  }

}
