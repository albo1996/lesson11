'use strict';

export class Component {
    constructor() {
        this.container = undefined;
        this.popup = undefined;
        this.onClick = this.onClick.bind(this);
    }

    render(params) {
        return `<div></div>`;
    }

    beforeMount() {}
    afterMount() {
        this.container.addEventListener('click', this.onClick.bind(this));
    }

    afterUnmount() {}

    onClick() {}

    mount(container, position = 'afterbegin', params) {
        this.beforeMount();

        let block = document.createElement('div');
        block.innerHTML = this.render(params);
        this.container = block.firstElementChild;
        container.insertAdjacentElement(position, this.container);
        block.remove();
        block = undefined;

        this.afterMount();
    }

    beforeUnmount() {}

    unmount() {
        if (this.container)
        {
            this.beforeUnmount();

            this.container.remove();
            this.container = undefined;

            this.afterUnmount();
        }
    }
}