import { Component, OnInit } from '@angular/core';
import { Parameter } from '../../shared/models/common/parameter';
import { ENDPOINT_TALLERES } from '../../shared/utils/apis';
import { TallerService } from '../../shared/services/rimac/taller.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.scss']
})
export class TallerComponent implements OnInit {
  form: FormGroup;

  vehiculo: any[] = [];
  distrito: any[] = [];
  TipoTaller: any[] = [];
  talleres: any[] = [];


  constructor(
    // private modalService: NgbModal
    private tallerService: TallerService,
    private fb: FormBuilder,
  ) {
  }
  OpenModal() {
    // const modalRef = this.modalService.open(ModalvehiculoComponent, { size: 'lg', backdrop: 'static' });
  }

  ngOnInit(): void {
    this.findVehiculo();
    this.getListDistrito();
    this.getListTaller();
    this.forms();
  }

  forms() {
    this.form = this.fb.group({
      placa: [null,],
      distrito: [null,],
      tipo: [null,],
    });
  }
  findVehiculo() {
    const parametro: Parameter = new Parameter();
    parametro.url = ENDPOINT_TALLERES.FIND_VEHICULO;
    parametro.request = 'POST';
    parametro.data = {
      "idClient": 1
    };

    this.tallerService.getListVehiculo(parametro).subscribe(
      async (value) => {
        console.log('encontrar vehiculo')
        console.log(value)
        value?.data ? this.vehiculo = value.data : [];

      }
    )
  }
  getListDistrito() {
    const parametro: Parameter = new Parameter();
    parametro.url = ENDPOINT_TALLERES.GET_DISTRITO;
    parametro.request = 'GET';

    this.tallerService.getListVehiculo(parametro).subscribe(
      async (value) => {
        console.log('listar distrito')
        console.log(value)
        value?.data ? this.distrito = value.data : [];

      }
    )
  }
  getListTaller() {
    const parametro: Parameter = new Parameter();
    parametro.url = ENDPOINT_TALLERES.GET_TALLER;
    parametro.request = 'GET';

    this.tallerService.getListVehiculo(parametro).subscribe(
      async (value) => {
        console.log('tipo taller')
        console.log(value)
        value?.data ? this.TipoTaller = value.data : [];

      }
    )
  }
  findTaller() {
    const parametro: Parameter = new Parameter();
    parametro.url = ENDPOINT_TALLERES.FIND_TALLER;
    parametro.request = 'POST';
    parametro.data = this.form.value;

    this.tallerService.getListVehiculo(parametro).subscribe(
      async (value) => {
        console.log('findTaller')
        console.log(value)
        value?.data ? this.talleres = value.data : [];

      }
    )
  }

  filtros() {
    this.findTaller();
    console.log(this.form.value)

  }

  selectTaller(item: any) {
    console.log('select taller');
    console.log(item);
  }
}

