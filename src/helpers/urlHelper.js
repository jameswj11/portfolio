var GetURL = function (param) {
    console.log('getting url')
    
    if (param) {
        console.log('the param is:', param)
        return param
    } else {
        console.log('no param')
        var error = 'no param';
        return error
    }
}

export default GetURL;