type PreviewPhoto = {
  photoPath: string;
};

type Gallery = {
  id: number;
  name: string;
  previewPhotos: PreviewPhoto[];
};

export type { Gallery, PreviewPhoto };
