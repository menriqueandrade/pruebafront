import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  mostrar = false;
 


  openModal() {
    this.mostrar = true;
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  closeModal2() {
    const modelDiv = document.getElementById('myModalEdit');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
}
