import java.util.LinkedHashMap;
import java.util.Map;

// https://java-planet.blogspot.pt/2005/08/how-to-set-up-simple-lru-cache-using.html
// Reference
public LRUCache<K, V> extends LinkedHashMap<K, V> {
  private int cacheSize;
  private long accessCount;
  private long hitCount;

  public LRUCache(int cacheSize) {
    // True to have access order
    super(16, 0.75, true);
    this.cacheSize = cacheSize;
    this.hit_count = 0;
    this.get_count = 0;
  }

  protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
    return size() >= cacheSize;
  }

  @Override
  public V get(K key) {
    accessCount++;
    if (containsKey(key))
    {
      hitCount++;
    }
    Object value = super.get(key);
    return value;
  }

  @Override
  public void clear() {
    super.clear();
    this.hitCount = 0;
    this.getCount = 0;
  }

  @Override
  public put(K key, V value) {

  }

  public float getHitRatio() {
    return this.hitCount/this.accessCount;
  }
}
