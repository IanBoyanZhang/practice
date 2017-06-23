// References:
// https://soulmachine.gitbooks.io/algorithm-essentials/content/cpp/linear-list/linked-list/lru-cache.html
// Discussion about size attribute of stl::list
// http://russelltao.iteye.com/blog/2009613
// http://en.cppreference.com/w/cpp/container/list/size#Complexity
// Is list size really O(n)?
// https://stackoverflow.com/questions/228908/is-listsize-really-on
// http://www.hawstein.com/posts/lru-cache-impl.html
// Hashmap + doubly linked list
// A simple LRU cache writtein in C++
#ifndef _LRUCACHE_HPP_INCLUDED_
#define _LRUCACHE_HPP_INCLUDED_

#include <unordered_map>
#include <list>
#include <cstddef>
#include <stdexcept>

namespace cache {

template <typename key_t, typename value_t>
class lru_cache {
public:
  typedef typename std::pair<key_t, value_t> key_value_pair_t;
  typedef typename std::list<key_value_pair_t>::iterator list_iterator_t;

  lru_cache(size_t max_size): _max_size(max_size) {
  }

  void put(const key_t& key, const value_t& value) {
    auto it = _cache_items_map.find(key);
    _cache_items_list.push_front(key_value_pair_t(key, value));
    if (it != _cache_items_map.end()) {
      _cache_items_list.erase(it->second);
      _cache_items_map.erase(it);
    }
    _cache_items_map[key] = _cache_items_list.begin();

    if (_cache_items_map.size() > _max_size) {
      auto last = _cache_items_list.end(); 
      last -= 1;
      _cache_items_map.erase(last->first);
      _cache_items_list.pop_back();
    }
  }

  const value_t& get(const key_t& key) {
    auto it = _cache_items_map.find(key);
    if (it == _cache_items_map.end()) {
      throw std::range_error("There is no such key in cache");
    } else {
      _cache_items_list.splice(_cache_items_list.begin(), _cache_items_list, it->second);
      return it->second->second;
    }
  }

  bool exists(const key_t& key) const {
    return _cache_items_map.find(key) != _cache_items_map.end();
  }

  size_t size() const {
    return _cache_items_map.size();
  }
private:
  std::list<key_value_pair_t> _cache_items_list;
  std::unordered_map<key_t, list_iterator_t> _cache_items_map;
  size_t _max_size;
};

} // namespace cache

#endif /* _LRUCACHE_HPP_INCLUDED */
