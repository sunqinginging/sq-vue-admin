import { ElLoading } from "element-plus";

let loadingRequestCount = 0;
let loadingInstance;

const showLoading = () => {
  if (loadingRequestCount == 0) {
    loadingInstance = ElLoading.service({
      lock: true,
      text: "请求中...",
      background: "rgba(0,0,0,.7)",
    });
  }

  loadingRequestCount++;
};

const hideLoading = () => {
  if (loadingRequestCount < 0) {
    return;
  }
  loadingRequestCount--;
  if (loadingRequestCount == 0) {
    loadingInstance!.close();
  }
};

export { showLoading, hideLoading };
