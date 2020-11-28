const axios = require('axios');

async function makeRequests(){
    /* 
    Para a primeira api, utilizaremos a url api.publicapis.org/entries
    ela traz justamente uma listagem útil para essa atividade:
    uma listagem de APIs com os mais diversos propósitos.
    */
    await axios.get('https://api.publicapis.org/entries')
    .then(function (response) {
        // handle success
       console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log('Get method of publicapis finished.');
    });

    /* 
    Para o segundo exemplo, podemos utilizar uma API que retorna a cotação atual do bitcoin
    */

    await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function (response) {
    // handle success
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    console.log('Get method of coindesk finished.');
    });

    /* 
    Exemplo do método POST
    Essa api faz a conversão de um código HTML para pdf. É necessário o uso de uma apiKey, mas
    o processo de obtenção é simples: basta se cadastrar no endereço https://html2pdf.app
    */
    await axios.post('https://api.html2pdf.app/v1/generate', {
        html: '<h1>Hello world! Test for IFPI</h1>',
        apiKey: 'cde8ef933a5ad274e4c25aacb788e3c2b9c2ccbcc67c2eaf3c911577cebe74b9'
    })
    .then(function (response) {
        console.log(response.data);
        console.log(response.status);

    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    // always executed
    console.log('Get method of html2pdf finished.');
    });
}


makeRequests();