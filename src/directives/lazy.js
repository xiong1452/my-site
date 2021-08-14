import event from "@/utils/EventBus"
import defaultGif from "@/assets/images/default.gif"

let imgs = [];

const bebounde = ((fn) => {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
            this.timer = null
        }, 30)
    }
})

function setImgs() {
    for (const argument of imgs) {
        setImg(argument);
    }
}

event.$bus.$on('BlogListScroll', bebounde(setImgs))
event.$bus.$on('codeScroll', bebounde(setImgs))

function setImg(img) {
    img.dom.src = defaultGif;
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150
    if (rect.top > -height && rect.top < clientHeight) {
        const newImg = new Image();
        newImg.onload = function () {
            img.dom.src = img.src
        }
        newImg.src = img.src;
        imgs = imgs.filter((i) => i !== img);
    }

}

export default {
    inserted(el, binging) {
        if (binging.value) {
            const img = {
                dom: el,
                src: binging.value,
            };
            imgs.push(img);
            setImg(img);
        }
    },
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el);
    }
}