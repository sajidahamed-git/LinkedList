import { NewNode } from "./newNode.js";
export function LinkedList() {
    let head = null;
    let lastNode = null;
  
    function append(value) {
      const node = NewNode(value);
  
      if (!head) {
        head = node; // Set head to the new node (for the first node)
        lastNode = node; // Set lastNode to the new node (first node)
      } else {
        lastNode.nextNode = node; // Link the last node's nextNode to the new node
        lastNode = node; // Update lastNode to the new node
      }
    }
    function prepend(value) {
      const node = NewNode(value);
      node.nextNode = head;
      head = node;
    }
    function logList() {
      let currentNode = head;
      const listRepresentation = [];
      while (currentNode) {
        listRepresentation.push([
          `value: ${currentNode.value}, Next Node:${
            currentNode.nextNode ? currentNode.nextNode.value : null
          }`,
        ]);
        currentNode = currentNode.nextNode;
      }
      console.log(listRepresentation);
    }
    function gethead() {
      return head
    }
    return { append, prepend, logList,gethead};
  }