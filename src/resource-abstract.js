class ResourceAbstract{
    _data;
    _resourceKey;
    _transformer;

    get data(){
        return this._data
    }

    get resourceKey(){
        return this._resourceKey
    }

    get transformer(){
        return this._transformer
    }
    constructor(data = null,transformer = null, resourceKey = 'data')
    {
        this._data = data;
        this._transformer = transformer;
        this._resourceKey = resourceKey;
    }

    setData(data){
        this._data = data;
        return this;
    }

    setTransformer(transformer){
        this._transformer = transformer;
        return this;
    }
}
module.exports = ResourceAbstract;