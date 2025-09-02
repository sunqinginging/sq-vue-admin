import "pinia";

declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    // 任意 action 都允许定义一个防抖的毫秒数
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>;
  }
}
