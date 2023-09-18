// #1 Implement Bubble Sort in Javascript

// Input: numbs = [29,10,14,37,14] ------->>>>>>> Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // if(arr[j] > arr[j + 1]){
            //     [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            // }
            // Swap logic simplified
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// console.log(bubbleSort([29, 10, 14, 37, 14]))

// #2 Selection Sort in Javascript

// Input: numbs = [29,10,14,37,14] ------>>>>> Output: [10,14,14,29,37]

const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr;
}

// console.log(selectionSort([29, 10, 14, 37, 14]))

// #3 Insertion Sort in Javascript

// Input: numbs = [29,10,14,37,14,33,8,11] ------>>>>> Output: [8,10,11,14,29,33,37]

const insertionSort = (arr) => {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j+1] = key
    }

    return arr;
}

// console.log(insertionSort([29,10,14,37,14,33,8,11]))

// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple","date","cherry","banana"];

// console.log(fruits.sort())

const numbs = [10,5,18,1,27];

const compareNum = (a,b) => {return a-b}

// console.log(numbs.sort(compareNum))

const people = [
    {name:"Nilesh",age:23},
    {name:"Sagar",age:23},
    {name:"Bhushan",age:21},
    {name:"Sagar 2",age:22},
];

const compareObj = (a,b) => {
    return b.age - a.age
}

console.log(people.sort(compareObj))