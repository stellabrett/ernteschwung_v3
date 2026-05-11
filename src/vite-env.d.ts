/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare module "*.WebP" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}
