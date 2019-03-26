export default function hideElements(elems, flag = true) {

  if (flag) {
    return elems.forEach(ele => {
      ele.style.setProperty('display', 'none', 'important');
    });
  } else {
    return elems.forEach(ele => {
      ele.style.setProperty('display', '');
    });
  }
}
