const axios = require('axios');
const ClaimTransformer = require('./claim-transformer');
const Collection = require('./collection');
axios.get('https://coniun.io/api/cbox_v2/campaigns',{
    headers:{
        Authorization: 'Bearer MTI0NTk4.ctAsRlU8R3K6V00S-CPZljxpU9S3JETuIT6KRO8ELIbSMTgsRtzBZK-vtyyp'
    }
}).then((response) => {
    //console.log(response.data, "dat");
    console.log(new Collection(response.data, new ClaimTransformer));
});