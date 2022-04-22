function Node(v) {
    this.value = v
    this.next = null
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')

a.next = b
b.next = c


// function travel(root) {
//     let temp = root
//     while(temp) {
//         console.log(temp.value)
//         temp = temp.next
//     }
// }

function travel(root) {
    if(!root) return
    console.log(root.value)
    travel(root.next)
}
travel(a)