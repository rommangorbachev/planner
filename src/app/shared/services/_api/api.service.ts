import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export interface ServiceConfig {
  resourceEndpoint: string;
}
export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('ServiceConfig');

@Injectable()
export class ApiService<TModel, TDto> {
  protected readonly baseUrl!: string;
  protected readonly resourceEndpoint!: string;
  constructor(
    protected httpClient: HttpClient,
    @Inject(SERVICE_CONFIG) config: ServiceConfig
  ) {
    this.baseUrl = environment.baseUrl;
    this.resourceEndpoint = config.resourceEndpoint;
  }

  getList() {
    return this.httpClient.get<TModel[]>(`${this.baseUrl}${this.resourceEndpoint}`);
  }

  getById(id: number) {
    return this.httpClient.get<TModel>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
  }

  add(dto: TDto) {
    return this.httpClient.post<TModel>(`${this.baseUrl}${this.resourceEndpoint}`, dto);
  }

  update(dto: TDto) {
    return this.httpClient.put<TModel>(`${this.baseUrl}${this.resourceEndpoint}`, dto);
  }

  remove(id: number) {
    return this.httpClient.delete<number>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
  }
}
