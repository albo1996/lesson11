'use strict';

import { Component, DataSet, Factory } from "../exportLib.js";

export class Pagination extends Component {
    constructor(dataSet, limit = Number.MAX_SAFE_INTEGER) {
        super();
        this.dataSet = dataSet || new DataSet();
        this.currentPage = 0;
        this.currentLimit = limit;
        this.items = [];
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    nextPage() {
        this.currentPage++;
        this.mountList(-1);
    }

    prevPage() {
        if (this.currentPage !== 1) {
            this.currentPage--;
            this.mountList(1);
        }
    }

    mountList(param) {
        this.dataSet.list(this.currentPage, this.currentLimit)
            .then(
                response => {
                    let lenghtBefore = this.items.length;
                    let hasResponse = false;
                    for (let i in response)
                    {
                        hasResponse = true;
                        this.items.push(Factory.createStudent(response[i]));
                    }

                    if (hasResponse) {
                        for (let i = 0; i < lenghtBefore; i++) {
                            this.items.shift().unmount();
                        }
                        this.items.forEach( student => student.mount(document.getElementById('main')) );
                    }
                    else {
                        this.currentPage += param;
                    }
                });
    }

    afterMount() {
        document.getElementById('next').addEventListener('click', this.nextPage);
        document.getElementById('prev').addEventListener('click', this.prevPage);
        this.nextPage();
    }

    render() {
        return `
          <center class="pagination">
            <div class="pagination__button" id="prev"><</div>
            <div class="pagination__button" id="next">></div>  
          </center>
        `;
    }
}