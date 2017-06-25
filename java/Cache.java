import java.util.HashMap;

class Node {
  int key;
  int value;
  Node pre;
  Node next;

  public Node(int key, int value) {
    this.key = key;
    this.value = value;
  }
}

public class Cache {
  int capacity;

  int requests_count;
  int hit;

  HashMap<Integer, Node> map = new HashMap<Integer, Node>();
  Node head;
  Node end;

  public Cache(int capacity) {
    this.capacity = capacity;
    this.requests_count = 0;
    this.hit = 0;
    this.head = null;
    this.end = null;
  }

  public int get(int key) {
    this.requests_count += 1;
    if (map.containsKey(key)) {
      Node n = map.get(key);
      remove(n);
      setHead(n);
      this.hit += 1;
      return n.value;
    }
    return -1;
  }

  public void remove(Node n) {
    if(n.pre != null) {
      n.pre.next = n.next;
    } else {
      head = n.next;
    }

    if(n.next != null) {
      n.next.pre = n.pre;
    } else {
      end = n.pre;
    }
  }

  public void setHead(Node n) {
    n.next = head;
    n.pre = null;

    if (head != null) {
      head.pre = n;
    }

    head = n;

    if(end == null) {
      end = head;
      // end = n;
    }
  }

  public void set(int key, int value) {
    if (map.containsKey(key)) {
      int get_value = get(key);
      remove(head);
      this.hit += 1;
      this.requests_count += 1;
    }

    Node newNode = new Node(key, value);
    if (map.size() == capacity) {
      // end.pre.next = end.next;
      end.pre.next = null;
      remove(end);
      end = end.pre;
    }
    setHead(newNode);
    map.put(key, newNode);
  }

  public float getHitRatio() {
    return this.hit/this.requests_count;
  }

  // https://stackoverflow.com/questions/2811537/is-java-hashmap-clear-and-remove-memory-effective
  public void clear() {
    this.head = null;
    this.end = null;
    this.requests_count = 0;
    this.hit = 0;
    map.clear();
  }
}
