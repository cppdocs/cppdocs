---
title: "std::flat_multimap<Key,T,Compare,KeyContainer,MappedContainer>::equal_range"
source_path: "cpp/container/flat_multimap/equal_range"
category: "container"
since: "C++23"
---

Returns a range containing all elements with the given key in the container. The range is defined by two iterators, one pointing to the first element that is not less than key and another pointing to the first element greater than key. Alternatively, the first iterator may be obtained with lower_bound(), and the second with upper_bound().

## Declarations
```cpp
std::pair<iterator, iterator> equal_range( const Key& key );
```
_(since C++23)_

```cpp
std::pair<const_iterator, const_iterator> equal_range( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
std::pair<iterator, iterator> equal_range( const K& x );
```
_(since C++23)_

```cpp
template< class K >
std::pair<const_iterator, const_iterator> equal_range( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
[std::pair](/cpp/utility/pair/) containing a pair of iterators defining the wanted range: the first pointing to the first element that is not less than key and the second pointing to the first element greater than key.

## Example
```cpp
#include <iostream>
#include <flat_map>
 
template<typename I>
void print_equal_range(I first, I lb, I ub, I last)
{
    for (I i{first}; i != lb; ++i)
        std::cout << *i << ' ';
    std::cout << "[ ";
 
    for (I i{lb}; i != ub; ++i)
        std::cout << *i << ' ';
    std::cout << ") ";
 
    for (I i{ub}; i != last; ++i)
        std::cout << *i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::flat_multimap<int> c{4, 3, 2, 1, 3, 3};
    std::cout << "c = ";
    print_equal_range(begin(c), begin(c), end(c), end(c));
    for (int key{}; key != 6; ++key)
    {
        std::cout << "key = " << key << "; equal range = ";
        const auto [lb, ub] = c.equal_range(key);
        print_equal_range(begin(c), lb, ub, end(c));
    }
}
```

## See also
- [find](/cpp/container/flat_multimap/find/)
- [contains](/cpp/container/flat_multimap/contains/)
- [count](/cpp/container/flat_multimap/count/)
- [upper_bound](/cpp/container/flat_multimap/upper_bound/)
- [lower_bound](/cpp/container/flat_multimap/lower_bound/)
- [equal_range](/cpp/algorithm/equal_range/)
