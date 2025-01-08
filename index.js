import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("mango");

list.prepend("fire");
list.logList();
console.log('hello');