import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ToastService } from '../toast.service';
import { UserDto } from 'src/app/dtos/user/user.dto';



const API_URL =`${environment.API_URL}users`;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _httpClient: HttpClient = inject(HttpClient);
  private readonly _ToastService : ToastService = inject(ToastService);

  users: WritableSignal<UserDto[]> = signal([]);
  getUsers(): void {
    
  }
  
}
