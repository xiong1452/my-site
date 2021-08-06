import Vue from 'vue'
import Icon from '@/components/Icon';
import './ShowMessage.less'

function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: h => h(comp, {props}),
    })
    vm.$mount();
    return vm.$el;
}

export default function (object) {
    let {content, type, duration, container} = {
        content: 'none',
        type: 'info',
        duration: 2000,
        container: undefined,
        ...object
    }
    const div = document.createElement("div");
    div.innerHTML = '';
    const i = getComponentRootDom(Icon, {
        type,
    });
    const span = document.createElement("span");
    span.innerHTML = content;
    div.appendChild(i);
    div.appendChild(span);
    div.className = `Message-Container Message-${type}`
    i.className += ' Message-Icon'
    span.className = "Message-Content"
    if (!container) {
        container = document.body
    } else {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative'
        }
    }
    container.appendChild(div);
    div.clientHeight;

    div.style.opacity = '1';
    div.style.transform = 'translate(-50%, -50%)'

    setTimeout(() => {
        div.style.opacity = '0';
        div.style.transform = 'translate(-50%, -50%) translateY(-25px)'
        addEventListener("transitionend", (fn) => {
            div.remove();
            object.fn && object.fn();
        }, {once: true})
    }, duration);

    return div;
};