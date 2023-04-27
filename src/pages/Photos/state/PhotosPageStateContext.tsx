import { createContext } from "react";
import PhotosPageState from "./PhotosPageState";

const PhotosPageStateContext = createContext<PhotosPageState>(null as unknown as PhotosPageState);

export default PhotosPageStateContext;
