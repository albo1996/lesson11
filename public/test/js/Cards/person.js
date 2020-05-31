'use strict';

import { Component } from "../exportLib.js";

export class Person extends Component{
    /**
     * @param {Object} params
     * { fullName: String, birthday: Date, protoUrl: String }
     */
    constructor(params = { fullName: 'Аноним', bday: new Date(), photo: 'img/ava06.jpg', phone: '', active: new Data() }) {
        super(params);
        this.fullName = params.fullName || params.title;
        this.bday = params.bday;
        this.photo = params.photo;
        this.phone = params.phone;
        this.active = params.active;
        this.id = params.id;
        this.type = 'Человек';
    }

    /**
     * @returns {number} Количество лет
     */
    get age() {
        return parseInt((Date.now() - this.bday) / 3600 / 24 / 365.25 / 1000);
    }

    /**
     * Возвращает строку формата: "день(Число) месяц"
     * @returns {string}
     */
    get birthDateStr() {
        return this.bday.getDate() + '.' + this.bday.toLocaleString('default', { month: 'long' });
    }

    toString() {
        function year(age) {
            let res = (age || 0) % 10;
            if (res === 0 || res >= 5) return 'лет';
            if (res === 1) return 'год';
            if (res <= 4) return 'года';
        }
        return `${this.type}\n` + `ФИО: ${this.fullName}\n`
            + `День рождения: ${this.birthDateStr}, ${this.age} ${year(this.age)}\n`
            + `Ссылка на фото: ${this.photoUrl}\n`;
    }
}