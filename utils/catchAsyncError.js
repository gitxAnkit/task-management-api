export default function (func) {
    return function (req, res, next) {
        Promise
            .resolve(func(req, res, next))
            .catch(next);
    };
};
