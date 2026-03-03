---
title: "std::multiset<Key,Compare,Allocator>::equal_range"
source_path: "cpp/container/multiset/equal_range"
category: "container"
since: "C++14"
---

Returns a range containing all elements with the given key in the container. The range is defined by two iterators, one pointing to the first element that is not less than key and another pointing to the first element greater than key. Alternatively, the first iterator may be obtained with [lower_bound()](/cpp/container/multiset/lower_bound/), and the second with [upper_bound()](/cpp/container/multiset/upper_bound/).

## Declarations
```cpp
std::pair<iterator, iterator> equal_range( const Key& key );
```

```cpp
std::pair<const_iterator, const_iterator> equal_range( const Key& key ) const;
```

```cpp
template< class K >
std::pair<iterator, iterator> equal_range( const K& x );
```
_(since C++14)_

```cpp
template< class K >
std::pair<const_iterator, const_iterator> equal_range( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
[std::pair](/cpp/utility/pair/) containing a pair of iterators defining the wanted range: the first pointing to the first element that is not less than key and the second pointing to the first element greater than key.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers, for overloads (3,4)

## Example
```cpp
#include <iostream>
#include <set>
 
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
    std::multiset<int> c{4, 3, 2, 1, 3, 3};
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
- [find](/cpp/container/multiset/find/)
- [contains](/cpp/container/multiset/contains/)
- [count](/cpp/container/multiset/count/)
- [upper_bound](/cpp/container/multiset/upper_bound/)
- [lower_bound](/cpp/container/multiset/lower_bound/)
- [equal_range](/cpp/algorithm/equal_range/)
