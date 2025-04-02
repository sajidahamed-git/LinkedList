import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("mango");

list.prepend('monkey')


list.insertAt('mam',3)
console.log(list.atIndex(4));
// list.removeAt(2);

console.log(list.size());
list.logList();
