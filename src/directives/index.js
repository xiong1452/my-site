import urlImg from '@/assets/images/404.gif'

function getImgElement(el) {
    return el.querySelector('img[data-role="loading"]')
}

function createImageElement(binging) {
    let img = document.createElement("img");
    img.dataset.role = 'loading';
    img.src = urlImg;
    if (binging.modifiers.center) {
        img.style.transform = "translate(65%,-50%)"
    }
    if (binging.modifiers.comment) {
        img.style.width = '100px'
        img.style.height = '100px'
    }
    return img
}

function setLoading(el, binging) {
    if (binging.modifiers.once) {
        if (!count) {
            count++
        } else {
            return;
        }
    }
    if (binging.value) {
        if (getImgElement(el)) {
            return;
        } else {
            el.appendChild(createImageElement(binging));
        }
    } else {
        if (getImgElement(el)) {
            getImgElement(el).style.opacity = '0';
            setTimeout(() => {
                getImgElement(el).remove();
            }, 300)
        }
    }
}

let count = 0

export default {
    bind(el, binging) {
        setLoading(el, binging);
        count = 0
    },
    update(el, binging) {
        setLoading(el, binging)
    },
    unbind() {
        count = 0;
    },
};