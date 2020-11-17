import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService extends BaseService{
  baseUrl = this.baseUrl + "/psicologos";
}
