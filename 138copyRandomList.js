function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 *
 */
var copyRandomList = function(head) {
  if (!head) return null;

  var node = head;
  var hash = new Map();
  var newArr = [];

  while(node) {
   hash.set(node, newArr.length);
   newArr.push(new RandomListNode(node.label));
   node = node.next;
  }

  node = head;
  var index;
  for(var i = 0, len = newArr.length; i < len; i+=1) {
    if(i < len - 1)
      newArr[i].next = newArr[i+1];
    index = hash.get(node.random);
    if (index !== undefined)
      newArr[i].random = newArr[index];
    node = node.next;
  }

  return newArr[0];
};

var copyRandomList = function(head) {
  if(!head) return null;

  let node = head;
  let newArr = [];
  let hash = new Map();

  while(node) {
    hash.set(node, newArr.length);
    newArr.push(new RandomListNode(node.label));
    node = node.next;
  }

  node = head;
  for (let i = 0, len = newArr.length; i < len; i+=1) {
    if(i < len - 1) {
      newArr[i].next = newArr[i + 1];
    }
    let index = hash.get(node.random);
    if (index !== undefined)
      newArr[i].random = newArr[index];
    node = node.next;
  }
  return newArr[0];
};
