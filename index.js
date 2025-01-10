import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("mango");

list.prepend("fire");
list.prepend('monkey')

list.append('new')
list.prepend('kochi')
list.append('old')
list.append('sajid')
// list.pop()
list.logList();
console.log(list.size());