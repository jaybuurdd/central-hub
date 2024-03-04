import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userRoleChanged: EventEmitter<string> = new EventEmitter();

  constructor() {}

  setUserRole(role: string): void {
    localStorage.setItem('userRole', role);
    this.userRoleChanged.emit(role);
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole') as string;
  }

  removeUserRole(): void {
    localStorage.removeItem('userRole');
    this.userRoleChanged.emit('');
  }
}
