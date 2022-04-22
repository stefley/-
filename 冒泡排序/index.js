const arr = [1, 10, 3, 5, 4, 2, 8, 6, 7, 9];


// 排序3步骤 1.比较 2.交换 3.排序

function compare(a,b) {
    if (a > b) {
        return true
    } else {
        return false
    }
}

function swap(arr, i, j) {
    // let temp = arr[j]
    // arr[j] = arr[i]
    // arr[i] = temp
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function bubbleSort(arr) {
    // 遍历数组
    for(let i = 0; i < arr.length-1;i++) {
        // 向上冒泡, 每冒一次减少一次遍历 (-i)
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(compare(arr[j], arr[j+1])) {
                swap(arr, j, j+1)
            }
        }
    }
}

bubbleSort(arr)
console.log(arr)