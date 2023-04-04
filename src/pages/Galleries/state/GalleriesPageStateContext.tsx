import { createContext } from "react";
import GalleriesPageState from "./GalleriesPageState";

const GalleriesPageStateContext = createContext<GalleriesPageState>(null as unknown as GalleriesPageState);

export default GalleriesPageStateContext;
