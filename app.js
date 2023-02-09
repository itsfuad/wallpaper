
document.ontouchmove = (evt) => {
    animate(evt.touches[0]);
}

document.onmousemove = (evt) => {
    animate(evt);
}

let angerVisibility = "";
let eyeLeft = document.getElementById('eyeLeft'), eyeRight = document.getElementById('eyeRight');

/**
* @param {MouseEvent | Touch} evt
*/
function animate(evt){
    const x = evt.clientX;
    const y = evt.clientY;

    //const rect = anchor.getBoundingClientRect();
    //make rect as the middle of the left and right eye
    const rect = {
        left: (eyeLeft.getBoundingClientRect().left + eyeRight.getBoundingClientRect().left) / 2,
        top: (eyeLeft.getBoundingClientRect().top + eyeRight.getBoundingClientRect().top) / 2,
        width: (eyeLeft.getBoundingClientRect().width + eyeRight.getBoundingClientRect().width) / 2,
        height: (eyeLeft.getBoundingClientRect().height + eyeRight.getBoundingClientRect().height) / 2,
    }


    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const angleDeg = angle(x, y, anchorX, anchorY);
    eyeLeft.style.transform = `rotate(${90 + angleDeg}deg)`;
    eyeRight.style.transform = `rotate(${90 + angleDeg}deg)`;
}

/**
* @param {number} cx
* @param {number} cy
* @param {number} ex
* @param {number} ey
*/
function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}