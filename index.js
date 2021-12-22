class Polygon {
    constructor(array) {
        this.array = array
    }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
        return this.array.reduce((a, b) => a+b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) {
            return false
        }
        let [a, b, c] = [this.array[0], this.array[1], this.array[2]]
        if (a+b<=c || a+c<=b || b+c<=a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) {
            return false
        }
        for (let i=0; i<this.array.length; i++) {
            let j = i++
            if (this.array[i] !== this.array[j]) {
                return false
            }
        }
        return true
    }
    get area() {
        return this.array[0] * this.array[1]
    }
}

// const arr = [1,2,3]
// function check(array) {
//     let arr = []
//     for (let i=0; i<array.length; i++) {
//         for (let j=i+1; j<array.length; j++) {
//             arr.push(array[i]+array[j])
//             }
//     }
    
//     for(let item of array) {
//         for (let num of arr) {
//             console.log(item, num)
//             if (item>=num) {
//                 return false
//             }
//         }
//     }
//         return true
// }
    

// console.log(check(arr))

// function area(array) {
//     let [a, b] = [array[0], array[1]]   
//     return a * b
// }
// console.log(area([5, 5, 5, 5]))