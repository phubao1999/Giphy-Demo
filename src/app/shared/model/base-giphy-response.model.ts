import { IGif } from './giphy.model';

export interface IBaseGiphyResponse {
  data: IGif[];
  meta: {
    msg: string;
    response_id: string;
    status: number;
  };
  pagination: {
    count: number;
    offset: number;
    total_count: number;
  };
}

export interface IGiphyDetailsResponse {
  data: IGif;
  meta: {
    msg: string;
    response_id: string;
    status: number;
  };
}

export interface IBaseResponse<T> {
  data: T;
  meta: {
    msg: string;
    response_id: string;
    status: number;
  };
}
