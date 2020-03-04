/*
 * @Date: 2020-03-04 11:14:13
 * @LastEditors: xshaobaozi
 * @LastEditTime: 2020-03-04 17:13:08
 */

shellSort([3, 2, 1, 2, 12, 45, 13, 76, 43, 21, 1, 0, 54, 34])


function shellSort(arr) {
    var len = arr.length
    var temp;
    var gap = 1;
    while(gap < len / 3) {
        gap = gap * 3 + 1
    }
}


function testLog(i, arr) {
    console.log('排序结果:', i)
    console.log(arr)
}

