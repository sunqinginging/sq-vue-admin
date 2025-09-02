export interface IResult<T = any> {
  code: number | string;
  data: T;
  msg: string;
}

export interface PageParams {
  pageIndex: number;
  pageSize: number;
}

export namespace ITest {
  export interface Params extends PageParams {
    name?: string;
  }
}
