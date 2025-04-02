export function NewNode(value) {
  return {
    value: value || null,
    pointer: null, // Default nextNode is null
  };
}