function Node(v) {
  this.value = v;
  this.next = null;
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");

a.next = b;
b.next = c;
/**
 *  @function 逆置链表
 *  @param {根节点} root
 */
function reverse(root) {
    if(root.next.next === null) {
        // 此时root是倒数第2节点，返回倒数第1节点且next为倒数第2节点
        root.next.next = root
        return root.next
    } else {
        let ret = reverse(root.next)
        // 逆置： 当前节点的下个节点的next为当前节点
        root.next.next = root
        root.next = null 
        return ret
    }
}
function travel(root) {
  if (root === null) return;
  console.log(root.value);
  travel(root.next);
}

travel(a);
travel(reverse(a));
