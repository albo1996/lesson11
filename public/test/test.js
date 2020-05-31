import { Person } from "./js/exportLib.js";
import { Student, Model, DataSet } from "./js/exportLib.js";

describe("Person", function() {
   'use strict';
    describe("Function age", function() {
        it('Age: 19', function () {
            // arrange
            let variable = new Person({bday: new Date('10.10.2000')});
            //assert
            assert.equal(variable.age, 19);
        });
        it('Age: 0', function () {
            // arrange
            let variable = new Person({bday: Date.now()});
            //assert
            assert.equal(variable.age, 0);
        });
    });
});

describe("Student", function() {
    'use strict';
    describe("Render", function() {
        it('Корректная инициализация имени', function () {
            let student = new Student(new Model ({
                "id": 1,
                "title": "Миша Петров",
                "photo": "img/ava01.jpg",
                "study": "Угату",
                "bday": "2000-05-01T00:00:00.000Z",
                "phone": "+7 (963) 123-45-67",
                "active": "2020-04-11T18:01:47.339Z"
            }));

            assert.equal(student.fullName, "Миша Петров");
        });
        it('Корректная инициализация имени по умолчанию (не undefined)', function () {
            let student = new Student();

            assert.equal(student.fullName, "Аноним");
        });
    });
    it('Mount и unmount элемента', function () {
        let student = new Student(new Model ({
            "id": 1,
            "title": "Миша Петров",
            "photo": "img/ava01.jpg",
            "study": "Угату",
            "bday": "2000-05-01T00:00:00.000Z",
            "phone": "+7 (963) 123-45-67",
            "active": "2020-04-11T18:01:47.339Z"
        }));

        student.mount(document.body, 'beforeend');
        const cont = document.getElementsByClassName('profile').item(0);
        const isUndefined = cont === undefined;

        if (!isUndefined) {
            student.unmount();
        }

        assert.isFalse(isUndefined);
    });
});

describe("Dataset", function() {
    'use strict';
    it('Приведение данных к Model', function () {
        const params = {
            "id": 1,
            "title": "Миша Петров",
            "photo": "img/ava01.jpg",
            "study": "Угату",
            "bday": "2000-05-01T00:00:00.000Z",
            "phone": "+7 (963) 123-45-67",
            "active": "2020-04-11T18:01:47.339Z"
        };
        const dataSet = new DataSet({model: Model});

        assert.isTrue( JSON.stringify(dataSet.toModel(params)) === JSON.stringify(new Model(params)) );
    });
    it('Взятие данных с сервера', function () {
        const dataSet = new DataSet( {
            object: 'person',
            model: Model
        } );

        dataSet.read(1).then( res => assert.equal(res, {"id":1,"title":"Миша Петров","photo":"img/ava01.jpg","study":"Угату","bday":"2000-05-01T00:00:00.000Z","phone":"+7 (963) 123-45-67","active":"2020-04-11T18:01:47.339Z"}.json()) )
    });
});

mocha.run();
