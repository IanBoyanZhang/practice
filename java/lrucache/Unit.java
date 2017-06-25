//public class Unit implements Comparable<Element> {
public class Unit implements Element<Comparable> {
  private int value;

  public int compareTo(Unit u) {
    if (this.value > u.value) {
      return 1;
    }

    if (this.value == u.value) {
      return 0;
    }

    if (this.value < u.value) {
      return -1;
    }
    // Exception
    return -2;
  }

  public Object getValue() {
    return value; 
  }
}
