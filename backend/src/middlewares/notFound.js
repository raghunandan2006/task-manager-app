const notFound = (req, res, next) => {
    const err=new Error("page/Resource Does Not exist");
    err.status=404;
    next(err);
};

export default notFound;