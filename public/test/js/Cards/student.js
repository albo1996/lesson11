'use strict';

import { Person, Factory } from "../exportLib.js";

export class Student extends Person {
    /**
     * @param {Object} params
     * { fullName: String, birthday: Date, protoUrl: String, course: Number, university: String, group: String }
     */
    constructor(params = {
        fullName: 'Аноним',
        bday: new Date(),
        photo: 'img/ava06.jpg',
        course: 2,
        study: '',
        group: ''})
    {
        super(params);
        this.course = params.course || 2;
        this.study = params.study || '';
        this.group = params.group || '';
        this.type = 'Студент';
        this.popupStack = Factory.createPopupStack(this);
    }

    onClick(event) {
        this.popupStack.openPopup(event);
    }

    render() {
        return `
            <div class="profile">
                <img class="profile__avatar profile__avatar_profile" src="${this.photo}" alt="Аватар ${this.fullName}">
                <span class="profile__name" title="${this.fullName}">${this.fullName}</span>
                <span class="profile__description" title="${this.type}">${this.type}</span>
                <span class="profile__description" title="${this.study} ${this.course} курс">${this.study} ${this.course} курс</span>
            </div>
        `;
    }
}