const Collection = require('./collection');
class TransformerAbstract{
    _availableIncludes;
    _defaultIncludes;

    collection($data, $transformer){
        return new Collection($data, $transformer, $resourceKey);
    }
}
module.exports = TransformerAbstract;