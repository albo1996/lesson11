'use strict';

export class Model {
    constructor(params) {
        for (let key in params) {
            this[key] = params[key];
        }
    }

    set fullName(value) {
        this.title = value;
    }

    get fullName() {
        return `${this.title}`;
    }
}