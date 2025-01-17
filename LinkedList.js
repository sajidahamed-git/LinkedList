import { NewNode } from "./newNode.js";
export function LinkedList() {
  let head = null;
  let lastNode = null;
  let listRepresentation = [];

  function append(value) {
    const node = NewNode(value);

    if (!head) {
      //if head is empty
      head = node; // Set head to the new node (for the first node)
      lastNode = node; // Set lastNode to the new node (first node)
    } else {
      //if head is not null
      lastNode.pointer = node; // Link the last node's pointer to the new node
      lastNode = node; // Update lastNode to the new node
    }
  }
  function prepend(value) {
    const node = NewNode(value);
    node.pointer = head; // and set the new node.pointer as the head which will now be the second node
    head = node; //set the new node as the head
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
      return head;
    }
    let counter = 0;
    let currentNode = head;

    while (currentNode.pointer) {
      counter++;
      currentNode = currentNode.pointer;
      if (counter === index) {
        return currentNode;
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
    lastNode = currentNode //update the lastnode
  }

  function containsValue(value) {
    let currentNode = head;
    if (head === null) {
      return false;
    }
    if (head.value === value) {
      return true;
    }
    while (currentNode.pointer) {
      currentNode = currentNode.pointer;
      if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }

  function findValue(value) {
    if (head === null) {
      return false;
    }
    if (head.value === value) {
      return 0;
    }
    let counter = 1;
    let currentNode = head.pointer;
    while (currentNode) {
      if (currentNode.value === value) {
        return counter;
      }
      counter++;
      currentNode = currentNode.pointer;
    }
    return null;
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

  function insertAt(value, index) {
    const node = NewNode(value);
    if (index === 0) {
      prepend(value);
      return;
    }
    let currentNode = head;
    let counter = 0;
    while (currentNode && counter < index - 1) {
      currentNode = currentNode.pointer;
      counter++;
    }
    if (!currentNode) {
      throw new Error("Index out of bounds");
    }
    // Link the new node to the rest of the list by pointing it to the node that comes after the current node
    node.pointer = currentNode.pointer;
    //make sure the pointer of the current node correctly points to the node inserted
    currentNode.pointer = node;

    //if inserting at the last node
    if (currentNode.pointer === null) {
      lastNode = node
    }
  }

  function removeAt(index) {
    if (head === null) {
      throw new Error("Cannot remove from empty list");
    }
    if (index < 0) {
      throw new Error("Index cannot be negative");
    }
    if (index === 0) {
      head = head.pointer;
      return;
    }
    let currentNode = head;
    let counter = 0;
    while (currentNode && counter < index - 1) {
      currentNode = currentNode.pointer;
      counter++;
    }
    if (!currentNode) {
      throw new Error("index out of bounds");
    }
    if (currentNode.pointer.pointer === null) {
      currentNode.pointer = null; //remove tail node
    } else {
      currentNode.pointer = currentNode.pointer.pointer;
    }
  }
  return {
    removeAt,
    insertAt,
    findValue,
    pop,
    append,
    size,
    prepend,
    containsValue,
    logList,
    gethead,
    getTail,
    atIndex,
  };
}
