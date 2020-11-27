/*
 * @Description: 编码内容描述
 * @Author: zhouxiwen
 * @Date: 2020-11-27 10:19:04
 * @LastEditTime: 2020-11-27 10:21:30
 * @LastModifiedBy: zhouxiwen
 * @remarks: 备注
 */
const utils  = require('./index')
const users = [{name: 'pk', age: 18}, {name: 'kc', age: 19}]
users.sort(utils.compareDesc('age'))
console.log(users)