export function NewNode(value) {
  return {
    value: value || null,
    nextNode: null, // Default nextNode is null
  };
}