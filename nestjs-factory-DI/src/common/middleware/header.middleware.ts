export function header(req, res, next){
    if(req.headers.hasOwnProperty('custom-header'))
        res.setHeader('custom-header', req.headers['custom-header']);
    next();
}