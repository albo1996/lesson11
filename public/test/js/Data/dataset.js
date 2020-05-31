'use strict'

export class DataSet {
    constructor(params) {
        this.params = {
            ...{
                host: 'http://localhost:8080/api/',
                model: params.model
            },
            ...params
        };
    }

    query (query, options, params) {
        let url = new URL(this.params.host);
        url.pathname += query;
        for (let k in params) {
            url.searchParams.set(k, params[k]);
        }

        return fetch(url, options)
            .then( response => response.json() );
    }

    toModel(res) {
        return new (this.params.model)(res);
    }

    read(id) {
        return this.query(
            `${this.params.object}/${id || ''}`,
            {
                method: 'GET'
            });
    }

    list(page = 1, limit = Number.MAX_SAFE_INTEGER) {
        return this.query(
            `${this.params.object}/`,
            {
                method: 'GET'
            },
            {
                '_page': page,
                '_limit': limit,
            });
    }

    create(data) {
        return this.query(
            `${this.params.object}`,
            {
                method: 'POST',
                body: data
            });
    }

    delete(id) {
        return this.query(
            `${this.params.object}/${id}`,
            {
                method: 'DELETE'
            });
    }

    update(id, data) {
        return this.query(
            `${this.params.object}/${id}`,
            {
                method: 'PATCH',
                body: data,
            });
    };
}