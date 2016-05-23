

export default function getBoundingRect(elems) {
  return elems.map((elem) => {
    const boundingRect = elem.getBoundingClientRect();
    return {
      top: boundingRect.top,
      right: boundingRect.right,
      bottom: boundingRect.bottom,
      left: boundingRect.left,
    };
  });
}
