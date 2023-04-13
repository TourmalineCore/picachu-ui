import { useRef, useState } from "react";

function ImageSort() {
  const sortRef = useRef<HTMLDivElement>(null);
  const [isVisiblePopup, setVisiblePopup] = useState(false);
  const [];
  return (
    <div
      className="image-sort"
      ref={sortRef}
    >
      <div className="image-sort__label">
        <b>Sort by</b>
        <span onClick={() => setVisiblePopup()} />
      </div>
    </div>
  );
}

export default ImageSort;
