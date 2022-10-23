import Collection from "./collection";

export default{
    mounted(){
        console.log("fractal mounted");
    },
    methods:{
        collection(data, transformer, resourceKey){
            return new Collection(data, transformer, resourceKey)
        }
    }
}