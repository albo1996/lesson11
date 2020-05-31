'use strict';

import { Component } from "../exportLib.js";

export class Header extends Component {
    constructor(params = {
        name: "Tensor School",
        logoUrl: 'img/logo.jpg',
        description: 'Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'})
    {
        super(params);
        this.name = params.name;
        this.logoUrl = params.logoUrl;
        this.description = params.description;
    }

    render() {
        return `
            <header class="header">  
                <span class="header--name" title="Tensor School"><img class="header--logo" alt="Логотип компании Тензор" src="${this.logoUrl}" /> ${this.name}</span>
                <div class="header--text">${this.description}</div>
            </header>
        `
    }
}