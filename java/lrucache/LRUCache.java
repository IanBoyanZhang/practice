import java.util.LinkedHashMap;
import java.util.Map;

public LRUCache<K, V> extends LinkedHashMap<K, V> {
  private int cacheSize;
  private long accessCount;
  private long hitCount;

  public LRUCache(int cacheSize) {
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

  public float getHitRatio() {
    return this.hitCount/this.accessCount;
  }
}
