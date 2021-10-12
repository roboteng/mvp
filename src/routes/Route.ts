import { ReactNode } from "react";

export default interface Route {
  build: () => ReactNode;
}
