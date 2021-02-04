const GetError = (e, code, file, Function) =>{
    errors = {
        400: {
            message: 'Bad Request',
            type: 'Request',
            code: 500,
            file: file,
            function: Function
        },
        401:{
            message: 'Unauthorized',
            type: 'authorization',
            code: 500,
            file: file,
            function: Function},
        403:{
            message: 'Forbidden',
            type: 'authorization',
            code: 500,
            file: file,
            function: Function
        },
        404:{
            message: 'Not Found',
            type: 'Server',
            code: 500,
            file: file,
            function: Function
        },
        408:{
            message: 'Timeout',
            type: 'Server',
            code: 500,
            file: file,
            function: Function
        },
        500:{
            message: 'Internal Server Error',
            type: 'Server',
            code: 500,
            file: file,
            function: Function
        },
        501:{
            message: 'Not Found',
            type: 'Request',
            code: 500,
            file: file,
            function: Function
        },
        503:{
            message: 'Service unavailable',
            type: 'Server',
            code: 500,
            file: file,
            function: Function
        }
    }
    if(errors.hasOwnProperty(code)){
        return errors[code];
    }else{
        return errors[500];
    }
}
const GenerateReturnError = (e) =>{
    return {
        code: e.code,
        message: e.message
    };
}

module.exports = {
    getError:GetError,
    generateReturnError: GenerateReturnError
};