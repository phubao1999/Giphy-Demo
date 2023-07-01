import { IGif } from './giphy.model';

export interface IBaseGiphyResponse {
  data: IGif[];
  meta: IMeta;
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}

export interface IGiphyDetailsResponse {
  data: IGif;
  meta: IMeta;
}

export interface IBaseResponse<T> {
  data: T;
  meta: IMeta;
}

export interface IMeta {
  msg: string;
  response_id: string;
  status: number;
}
