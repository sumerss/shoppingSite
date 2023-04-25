exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { docTitle: 'Add-Product', url: '/add-product' })
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body)
    res.redirect('./')
}

exports.showProducts = (req, res, next) => {
    res.render('products', { docTitle: 'Shop', url: '/' })
}

exports.pageNotFound = (req, res, next) => {
    res.status(404).render('404', { docTitle: '404', url: '' })
}