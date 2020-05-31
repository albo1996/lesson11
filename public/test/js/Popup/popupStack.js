'use strict';

import { Factory, Component } from "../exportLib.js"

export class PopupStack extends Component {
    constructor(person) {
        super();
        this.stack = [];
        this.person = person;
        this.removePopup = this.removePopup.bind(this);
    }

    openPopup(event) {
        const removePopup = document.getElementsByClassName('popup').item(0);
        if (this.stack.length === 0 || removePopup) {
            if (removePopup) {
                removePopup.removeEventListener('click', this.removePopup);
                removePopup.remove();
                this.stack = [];
            }
            const popup = Factory.createPopup(this.person);
            popup.mount(this.person.container, 'afterbegin', event);
            this.stack.push(popup);
            document.getElementById(this.person.id).addEventListener('click', this.removePopup);
        }
    }

    removePopup() {
        // Так как в стеке только один элемент, то вынимаем него
        const popup = this.stack.pop();
        if (!popup) throw "В стеке нет popup'ов.";

        document.getElementById(this.person.id).removeEventListener('click', this.removePopup);
        popup.unmount();
        this.stack.length = 0;
    }
}