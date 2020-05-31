'use strict';

import { Student, Popup, Header, PopupStack } from './exportLib.js';

export class Factory {
    static createStudent(params) {
        return new Student(params);
    }

    static createPopup(params) {
        return new Popup(params);
    }

    static cleateHeader(params) {
        return new Header(params);
    }

    static createPopupStack(params) {
        return new PopupStack(params);
    }
}