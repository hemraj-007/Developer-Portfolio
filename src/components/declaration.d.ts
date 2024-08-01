declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "react-typical";

// src/types/custom.d.ts
import { ShaderMaterial } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      kaleidoscopeShaderMaterial: {
        attach?: string;
        ref?: React.Ref<ShaderMaterial>;
        [key: string]: any; // Allow any additional props
      };
      planeGeometry: any;
    }
  }
}

declare module 'react-typical' {
  const Typical: any;
  export default Typical;
}
