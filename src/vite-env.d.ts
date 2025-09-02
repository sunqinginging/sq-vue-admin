/// <reference types="vite/client" />
interface ViteTypeOptions {
  // 添加这行代码，你就可以将 ImportMetaEnv 的类型设为严格模式，
  // 这样就不允许有未知的键值了。
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "css-color-function" {
  export function convert(color: string): string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosRequestConfig } from "axios";
declare module "axios" {
  interface AxiosRequestConfig {
    showLoading?: boolean;
    showError?: boolean;
  }
}
