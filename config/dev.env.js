'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
        NODE_ENV: '"development"',
        HTTP_PATH: '"http://localhost"',
        APIPATH: '"https://vue-course-api.hexschool.io"',
        COSTOMPATH: '"leviathan91608"'
    })
    //常使用在Ajaxg上
    //因開發版與測試版的可能使用不同路徑