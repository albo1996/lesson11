'use strict';

import { Component } from "../exportLib.js";

export class Popup extends Component {
    constructor(person) {
        super();
        this.person = person;
    }

    render(event) {
        return `
        <div class="popup" onclick="event.stopPropagation();" style="left: ${event.x || 0}px; top: ${event.y || 0}px">
            <center>
                <div class="popup__header"> ${this.person.fullName}
                    <span class="spacer"></span>
                    <span class="popup__closer" id="${this.person.id}" title="Закрыть">X</span>
                </div>
                <div class="popup__content">
                    <img height="300" width="300" class="card__img" src="${this.person.photo}" alt="Аватар ${this.person.fullName}">
                </div>
            </center>
        </div>
        `;
    }
}