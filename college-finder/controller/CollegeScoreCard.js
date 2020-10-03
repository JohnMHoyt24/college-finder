const fetch = require('node-fetch');

// var school_state;
// school_state = "OH";

const url = "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&fields=id,school.name,2013.student.size&api_key=WvT92ONNQdtwSI7iEh1PnyumEUTMff7ig3KnuTFS"

const get_data = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    }catch(error){
        console.log(error);
    }
};

getData(url);

