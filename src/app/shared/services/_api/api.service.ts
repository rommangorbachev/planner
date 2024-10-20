import { inject, Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from '../../../../main';

export interface ServiceConfig {
  resourceEndpoint: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('ServiceConfig');



@Injectable()
export class ApiService<TModel, TDto> {
  protected readonly baseUrl = inject(API_URL);
  protected readonly resourceEndpoint!: string;

  constructor(
    protected httpClient: HttpClient,
    @Inject(SERVICE_CONFIG) config: ServiceConfig,
  ) {
    this.resourceEndpoint = config.resourceEndpoint;
  }

  getList(params?: any) {
    let httpParams = new HttpParams();
    httpParams = this.appendParams(httpParams, params);
    return this.httpClient.get<TModel[]>(`${this.baseUrl}${this.resourceEndpoint}`, { params: httpParams });
  }

  getById(id: number, params?: any) {
    let httpParams = new HttpParams();
    httpParams = this.appendParams(httpParams, params);
    return this.httpClient.get<TModel>(`${this.baseUrl}${this.resourceEndpoint}/${id}`, { params: httpParams });
  }

  add(dto: TDto, params?: any) {
    let httpParams = new HttpParams();
    httpParams = this.appendParams(httpParams, params);
    return this.httpClient.post<void>(`${this.baseUrl}${this.resourceEndpoint}`, dto, { params: httpParams });
  }

  update(dto: TDto, params?: any) {
    let httpParams = new HttpParams();
    httpParams = this.appendParams(httpParams, params);
    return this.httpClient.put<TModel>(`${this.baseUrl}${this.resourceEndpoint}`, dto, { params: httpParams });
  }

  remove(id: string, params?: any) {
    let httpParams = new HttpParams();
    httpParams = this.appendParams(httpParams, params);
    return this.httpClient.delete<number>(`${this.baseUrl}${this.resourceEndpoint}/${id}`, { params: httpParams });
  }

  private appendParams(httpParams: HttpParams, params?: any): HttpParams {
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.append(key, params[key]);
      });
    }
    return httpParams;
  }
}
