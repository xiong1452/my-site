import urlImg from '@/assets/images/404.gif'

function getImgElement(el) {
    return el.querySelector('img[data-role="loading"]')
}

function createImageElement() {
    let img = document.createElement("img");
    img.dataset.role = 'loading';
    img.src = urlImg;
    return img
}

export default function (el, binging) {
    if (binging.value) {
        if (getImgElement(el)) {
            return;
        } else {
            el.appendChild(createImageElement());
        }
    } else {
        if (getImgElement(el)) {
            getImgElement(el).style.opacity = '0';
            setTimeout(() => {
                getImgElement(el).remove();
            }, 300)
        }
    }
};