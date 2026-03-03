---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::equal_range"
source_path: "cpp/container/flat_map/equal_range"
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
 
int main()
{
    const std::flat_map<int, const char*> m
    {
        {0, "zero"},
        {1, "one"},
        {2, "two"}
    };
 
    auto p = m.equal_range(1);
    for (auto& q = p.first; q != p.second; ++q)
        std::cout << "m[" << q->first << "] = " << q->second << '\n';
 
    if (p.second == m.find(2))
        std::cout << "end of equal_range (p.second) is one-past p.first\n";
    else
        std::cout << "unexpected; p.second expected to be one-past p.first\n";
 
    auto pp = m.equal_range(-1);
    if (pp.first == m.begin())
        std::cout << "pp.first is iterator to first not-less than -1\n";
    else
        std::cout << "unexpected pp.first\n";
 
    if (pp.second == m.begin())
        std::cout << "pp.second is iterator to first element greater-than -1\n";
    else
        std::cout << "unexpected pp.second\n";
 
    auto ppp = m.equal_range(3);
    if (ppp.first == m.end())
        std::cout << "ppp.first is iterator to first not-less than 3\n";
    else
        std::cout << "unexpected ppp.first\n";
 
    if (ppp.second == m.end())
        std::cout << "ppp.second is iterator to first element greater-than 3\n";
    else
        std::cout << "unexpected ppp.second\n";
}
```

## See also
- [find](/cpp/container/flat_map/find/)
- [contains](/cpp/container/flat_map/contains/)
- [count](/cpp/container/flat_map/count/)
- [upper_bound](/cpp/container/flat_map/upper_bound/)
- [lower_bound](/cpp/container/flat_map/lower_bound/)
- [equal_range](/cpp/algorithm/equal_range/)
