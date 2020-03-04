/*
 * @Date: 2020-03-04 11:14:13
 * @LastEditors: xshaobaozi
 * @LastEditTime: 2020-03-04 14:03:54
 */

testLog(selectionSort([3, 2, 1, 2, 12, 45, 13, 76, 43, 21, 1, 0, 54, 34]))


function selectionSort(arr) {
    var len = arr.length
    for (var i = 0; i < len - 1; i++) {
        var temp = null, minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}


function testLog(arr) {
    console.log('排序结果:')
    console.log(arr)
}

