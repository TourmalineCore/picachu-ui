import { createContext } from "react";
import ImagesPageState from "./ImagesPageState";

const ImagesPageStateContext = createContext<ImagesPageState>(null as unknown as ImagesPageState);

export default ImagesPageStateContext;
