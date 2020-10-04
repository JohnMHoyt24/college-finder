const http = require('http');
const { parse } = require ('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Post method implementation
        // let body = '';
        // req.on('data', chunk => {
        //     body += chunk.toString();
        // });
        // req.on('end', () => {
        //     console.log(parse(body));
        //     res.end('ok');
        // });
        collectRequestData(req, result => {
        console.log(result);
        res.end(`Type of sort is: ${result.sortType}`)

        const userInfo = require('./CollegeScoreCard');
        userInfo.urlBuilder(result.sortType);
    });
    }else {
        //GET Method
        res.end(`
        <!doctype html>
        <html>
            <body>
                <form action = "/" method = "post">
                    <select name="sortType" id="sortType">
                        <option value="cost">Cost</option>
                        <option value="location">Location</option>
                    </select>
                    <button type="submit">Search</button>
                </form>
            </body>
        </html>
    `);
    }
});

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';

    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else{
        callback(null);
    }
}


server.listen(40000)


//Reference website: https://itnext.io/how-to-handle-the-post-request-body-in-node-js-without-using-a-framework-cd2038b93190