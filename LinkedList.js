import { NewNode } from "./newNode.js";
export function LinkedList() {
  let head = null;
  let lastNode = null;
  let listRepresentation = [];

  function append(value) {
    const node = NewNode(value);

    if (!head) {
      head = node; // Set head to the new node (for the first node)
      lastNode = node; // Set lastNode to the new node (first node)
    } else {
      lastNode.pointer = node; // Link the last node's pointer to the new node
      lastNode = node; // Update lastNode to the new node
    }
  }
  function prepend(value) {
    const node = NewNode(value);
    node.pointer = head;
    head = node;
  }
  function size() {
    let counter = 0;
    let currentNode = head;
    while (currentNode) {
      currentNode = currentNode.pointer;
      counter++;
    }
    return counter;
  }
  function gethead() {
    return head;
  }
  function getTail() {
    return lastNode;
  }

  function atIndex(index) {
    if (index == 0) {
      return head
    }
    let counter = 0
    let currentNode = head

    while (currentNode.pointer) {
      counter++
      currentNode = currentNode.pointer
      if (counter === index) {
        return currentNode
      }
    }

  }


  function pop() {
    if (!head) {
      return;
    }
    if (head === lastNode) {
      head = null;
      lastNode = null;
      return;
    }
    let currentNode = head;
    while (currentNode.pointer !== lastNode) {
      currentNode = currentNode.pointer;
    }
    currentNode.pointer = null;
  }


  function containsValue(value) {
    let currentNode = head
    if (head === null) {
      return false
    }
    if (head.value === value) {
      return true
    }
    while (currentNode.pointer) {
      currentNode = currentNode.pointer
      if (currentNode.value === value) {
        return true
      }
    }
    return false
  }


  function findValue(value) {
    if (head === null) {
      return false
    }
    if (head.value === value) {
      return 0
    }
    let counter = 0
    let currentNode = head
    while (currentNode.pointer) {
      if (currentNode.value === value) {
        return counter
        
      }
      currentNode = currentNode.pointer
      counter++
    }
    return null
  }
  function logList() {
    let currentNode = head;
    while (currentNode) {
      listRepresentation.push([
        `value: ${currentNode.value}    , pointer:${
          currentNode.pointer ? currentNode.pointer.value : null
        }`,
      ]);
      currentNode = currentNode.pointer;
    }
    console.log(listRepresentation);
  }
  return {findValue, pop, append, size, prepend,containsValue, logList, gethead, getTail,atIndex };
}
