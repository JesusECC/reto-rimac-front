import { Injectable } from '@angular/core';
// import { UserInformation, User } from 'src/app/models/restaurant/auth/user';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor() { }

  setToken(data: string): void {
    localStorage.setItem('token', data);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  obtenerPermisosToken(): string[] {
    return JSON.parse(localStorage.getItem('token')).permission;
  }

  obtenerUsuarioId(): number {
    return JSON.parse(localStorage.getItem('token')).user_information.usuarioSesion.id;
  }

  // obtenerAtributosPersonaDeToken(atributos: string[]) {
  //   let personaAux = JSON.parse(localStorage.getItem('token')).persona;
  //   let persona = new Persona();
  //   atributos.forEach(attr => {
  //     persona[attr] = personaAux[attr];
  //   });
  //   return persona;
  // }
}
