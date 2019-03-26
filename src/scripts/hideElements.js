
export default function hideElements(elems, flag = true) {

    if (flag) {
        return elems.forEach(ele => {
            ele.style.setProperty('opacity', '0.0', 'important');
        });
    } else {
        return elems.forEach(ele => {
            ele.style.setProperty('opacity', '1.0');
        });
    }
}
