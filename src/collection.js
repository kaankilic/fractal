const ResourceAbstract = require('./resource-abstract');
class Collection extends ResourceAbstract {
    constructor(data = [], transformer) {
        super(data, transformer, 'data');

        return data[super.resourceKey].map(o => transformer.transform(o));
    }

}
module.exports = Collection;