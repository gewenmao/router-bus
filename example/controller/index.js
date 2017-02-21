module.exports = [{
    url: ['/index', '/'],
    controller: function *() {
        this.body = 'This is index page'
    }
},{
    url: '/main',
    controller: function *() {
        this.body = 'This is main page'
    }
}]
