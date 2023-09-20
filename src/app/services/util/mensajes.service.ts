import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajeToast(icon: SweetAlertIcon, msj:string, tiempo: number, posi: SweetAlertPosition) {
    const Toast = Swal.mixin({
      toast: true,
      position: posi,
      showConfirmButton: false,
      timer: tiempo,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: icon,
      title: msj
    })
  }

  /* BUENA IDEA
  async mensajeCheck() {
    const { value: accept } = await Swal.fire({
      title: 'Terms and conditions',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'I agree with the terms and conditions',
      confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'You need to agree with T&C'
      }
    });
    
    if (accept) {
      Swal.fire('You agreed with T&C :)')
    }
  }
*/
}
