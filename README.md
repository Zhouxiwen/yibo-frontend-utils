<!--
 * @Description: 编码内容描述
 * @Author: zhouxiwen
 * @Date: 2020-11-27 10:00:21
 * @LastEditTime: 2020-11-27 11:47:05
 * @LastModifiedBy: zhouxiwen
 * @remarks: 备注
-->
# install
npm install yibo-frontend-utils

# github
http://183.6.50.10:880/YiBoData/yibo-frontend-utils.git

# usage
```
const utils = require('yibo-frontend-utils')

const users = [{name: 'pk', age: 18}, {name: 'kc', age: 19}]

users.sort(utils.compareDesc('age'))

console.log(users) // [{name: 'kc', age: 19}, {name: 'pk', age: 18}]

```
