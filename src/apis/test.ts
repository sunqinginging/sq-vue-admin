import request from "@/utils/request";
import type { ITest } from "@/types/api";

export const testRequest = (data: ITest.Params) => {
  return request.post("/moment/list", data, {
    showLoading: false,
  });
};
