'use strict';

import { Factory, Model, DataSet, Pagination } from './exportLib.js';

const header = Factory.cleateHeader();
header.mount(document.body);

const studentData = [ new Model ({
        fullName: 'Женя Серова',
        photo: 'img/ava03.jpg',
        study: 'Угату',
        bday: new Date('1998-11-13'),
    }),
    new Model ({
        fullName: 'Артем Карасюк',
        photo: 'img/ava01.jpg',
        study: 'НГТУ',
        bday: new Date('1998-11-13'),
    }),
    new Model ({
        fullName: 'Евгения Романова',
        photo: 'img/ava02.jpg',
        study: 'Угату',
        bday: new Date('1998-11-13'),
    }),
    new Model ({
        fullName: 'Георгий Лаб',
        photo: 'img/ava06.jpg',
        study: 'Угату',
        bday: new Date('1998-11-13'),
    }),
];

let dataset = new DataSet({
        object: 'person',
        model: Model,
    }
);

let studentArr = [];

let pagination = new Pagination(dataset, 2);
pagination.mount(document.body, 'beforeend');