---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::erase"
source_path: "cpp/container/unordered_multimap/erase"
category: "container"
since: "C++11"
---

Removes specified elements from the container. The order of the remaining elements is preserved. (This makes it possible to erase individual elements while iterating through the container.)

## Declarations
```cpp
iterator erase( iterator pos );
```
_(since C++11)_

```cpp
iterator erase( const_iterator pos );
```
_(since C++11)_

```cpp
iterator erase( const_iterator first, const_iterator last );
```
_(since C++11)_

```cpp
size_type erase( const Key& key );
```
_(since C++11)_

```cpp
template< class K >
size_type erase( K&& x );
```
_(since C++23)_

## Parameters
- `pos`: iterator to the element to remove
- `first, last`: range of elements to remove
- `key`: key value of the elements to remove
- `x`: a value of any type that can be transparently compared with a key denoting the elements to remove

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_associative_heterogeneous_erasure
202110L
(C++23)
Heterogeneous erasure in associative containers and unordered associative containers; overload (5)

## Example
```cpp
#include <unordered_map>
#include <iostream>
 
int main()
{
    std::unordered_multimap<int, std::string> c =
    {
        {1, "one"}, {2, "two"}, {3, "three"},
        {4, "four"}, {5, "five"}, {6, "six"}
    };
 
    // erase all odd numbers from c
    for (auto it = c.begin(); it != c.end();)
    {
        if (it->first % 2 != 0)
            it = c.erase(it);
        else
            ++it;
    }
 
    for (auto& p : c)
        std::cout << p.second << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2059 | C++11 | there was ambiguity for overload (2) | added overload (1) |
| LWG 2356 | C++11 | the order of non-equivalent elements that arenot erased was not guaranteed to be preserved | required to be preserved |

## See also
- [clear](/cpp/container/unordered_multimap/clear/)
