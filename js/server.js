

const port = 3000

var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
var { OpenAIApi, Configuration} = require('openai');
app.use(cors())

let config = new Configuration({
    apiKey: OPEN_API_KEY,
});
let openai = new OpenAIApi(config);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});



app.get('/english/:value', (req, res) => {
    const { value } = req.params
    openai.createCompletion( {
        model: "text-davinci-002",
        prompt: value,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((result) => {
        console.log(result.data.choices[0].text)
        res.json({"AIAnswer": result.data.choices[0].text})
    })
})


app.get('/translate', (req, res) => {

    var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    var query = req.query.q;

    var options = {
        url: api_url,
        form: {'source':'ko', 'target':'en', 'text':query},
        headers: {'X-Naver-Client-Id':NAVER_CLIENT_ID, 'X-Naver-Client-Secret': NAVER_CLIENT_SECRET}
     };

    request.post(options, (error, response, body) => {

        var 영어 = JSON.parse(body).message?.result.translatedText;

        openai.createCompletion({
            model: "text-davinci-002",
            prompt: 영어,
            temperature: 0.7,
            max_token: 128,
            top_p: 1,
            frequency_panalty: 0,
            presence_penalty: 0,
        }).then((result) => {
            console.log('AIAnswer',result.data.choices[0].text);
            var api_url = 'https://openapi.naver.com/v1/papago/n2mt';

            var query = result.data.choices[0].text;
            var options = {
                url: api_url,
                form: {'source':'en', 'target':'ko', 'text':query},
                headers: {'X-Naver-Client-Id':NAVER_CLIENT_ID, 'X-Naver-Client-Secret': NAVER_CLIENT_SECRET}
            };
            request.post(options, (error, response, body) => {
                console.log(body);
                res.status(200).json(body);

            });
        }).catch((error) => {
            console.log('openai error', error)
        })
    });
});



app.listen(port, () => {
    console.log("http://localhost:3000/ app listening on port 3000!")
})




  
// // http://localhost:3000/page/fourth
// app.get('/page/:value', (req, res) => {
//     const {value} = req.params
//     if (value == "first") {
//         res.json({'pageNumber': "page1"})
//     } else if (value == "second") {
//         res.json({'pageNumber': "page2"})
//     } else if (value == "third") {
//         res.json({'pageNumber': "page3"})
//     } else {
//         res.json({'pageNumber': "updating.."})
//     }
// })

// // http://localhost:3000/David?q=&name=DavidShin&age=29
// app.get('/:input', (req, res) => {
//     const q = req.query
//     console.log(q)
//     res.json({ "name" : q.name, "age": q.age})
// })