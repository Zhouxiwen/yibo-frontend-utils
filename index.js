/*
 * @Description: 编码内容描述
 * @Author: zhouxiwen
 * @Date: 2020-11-27 09:34:04
 * @LastEditTime: 2020-11-27 10:21:12
 * @LastModifiedBy: zhouxiwen
 * @remarks: 备注
 */
// 排序---降序
const compareDesc = (prop) => {
  return function (a, b) {
    if (prop) {
      return b[prop] - a[prop]
    } else {
      return b - a
    }
  };
};
// 排序---升序
const compareAsc = (prop) => {
  return function (a, b) {
    if (prop) {
      return a[prop] - b[prop]
    } else {
      return a - b
    }
  }
}
module.exports= { compareDesc, compareAsc }
