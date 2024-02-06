//Import modules: connect and url
const connect = require('connect');
const url = require('url');

//calculate function that parses the url for 3 parameters
function calculate(url){
    // parse url for 3 parameters
    const params = new URLSearchParams(url);
    const method = params.get('method');
    const x = Number(params.get('x'));
    const y = Number(params.get('y'));

    //using switch method to allow  the math operation based on the entered method parametrt.
    switch(method){
        case 'add':
            return `${x} + ${y} = ${x + y}`;
            case 'multiply':
                return `${x} * ${y} = ${x * y}`;
                case 'subtract':
                    return `${x} - ${y} = ${x - y}`;
                    case 'divide':
            return `${x} / ${y} = ${x / y}`;
            
        default: 
        return 'Please enter valid parameter.';
    }
}

//connecting app
const app = connect();

app.use((req,res,next) => {
const result = calculate(req.url);
     
      res.end(result);
});

app.listen(3000, () =>  {
    console.log('Server running on http://localhost:3000');
});
