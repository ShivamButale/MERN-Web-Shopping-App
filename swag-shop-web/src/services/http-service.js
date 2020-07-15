import 'whatwg-fetch'

class httpService{
    getProducts = () => {
        var promise = new Promise((resolve, reject) => {
        fetch('http://localhost:3004/product')
        .then(response => {
            resolve(response.json());
        })
    });
    return promise;
}
}

export default httpService;