import Vue from 'vue';
const mapper = (schema, data) => {
    if (Array.isArray(data)) {
        let entity = data.map(o => {
            let obj = Object.assign(...Object.entries(schema).map(([k, v]) => {
                if (typeof v === 'string') {
                    return ({
                        [k]: o[v]
                    })
                }
                if (typeof v === 'object') {
                    let inner = o[k].map(i => {
                        return Object.assign(...Object.entries(schema[k]).map(([s,
                            j
                        ]) => ({
                            [s]: i[j]
                        })));
                    });
                    return ({
                        [k]: inner
                    });
                }
            }))
            return Vue.observable(obj);
        });
        return entity;
    } else {
        let obj = Object.assign(...Object.entries(schema).map(([k, v]) => {
            if (typeof v === 'string') {
                return ({
                    [k]: data[v]
                })
            }
            if (typeof v === 'object') {
                let inner = Object.assign(...Object.entries(schema[k]).map(([s,
                    j
                ]) => {
                    if (Array.isArray(data[k][s]) && typeof j === 'object') {
                        const recursive_mapper = mapper(j, data[k][s]);
                        return { [s] : recursive_mapper }
                    } else {
                        return {
                            [s]: data[k][j]
                        }
                    }
                }));
                return ({
                    [k]: inner
                });
            }
        }))
        return Vue.observable(obj);
    }
}
export default mapper;
