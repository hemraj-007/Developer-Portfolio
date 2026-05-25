declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "react-typical";

import type * as React from "react";
import { ShaderMaterial } from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      kaleidoscopeShaderMaterial: {
        attach?: string;
        ref?: React.Ref<ShaderMaterial>;
        [key: string]: unknown;
      };
      planeGeometry: Record<string, unknown>;
    }
  }
}

declare module "react-typical" {
  const Typical: React.ComponentType<Record<string, unknown>>;
  export default Typical;
}
