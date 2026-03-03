---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::erase"
source_path: "cpp/container/unordered_multiset/erase"
category: "container"
since: "C++23"
---

Removes specified elements from the container. The order of the remaining elements is preserved. (This makes it possible to erase individual elements while iterating through the container.)

## Declarations
```cpp
iterator erase( iterator pos );
```
_(since C++11) (until C++23)_

```cpp
iterator erase( iterator pos )
requires(!std::same_as<iterator, const_iterator>);
```
_(since C++23)_

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
#include <unordered_set>
#include <iostream>
 
int main()
{
    std::unordered_multiset<int> c = {1, 2, 3, 4, 1, 2, 3, 4};
 
    auto print = [&c]
    {
        std::cout << "c = { ";
        for (int n : c)
            std::cout << n << ' ';
        std::cout << "}\n";
    };
    print();
 
    std::cout << "Erase all odd numbers:\n";
    for (auto it = c.begin(); it != c.end();)
    {
        if (*it % 2 != 0)
            it = c.erase(it);
        else
            ++it;
    }
    print();
 
    std::cout << "Erase 1, erased count: " << c.erase(1) << '\n';
    std::cout << "Erase 2, erased count: " << c.erase(2) << '\n';
    std::cout << "Erase 2, erased count: " << c.erase(2) << '\n';
    print();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2059 | C++11 | there was ambiguity for overload (2) | added overload (1) |
| LWG 2356 | C++11 | the order of non-equivalent elements that arenot erased was not guaranteed to be preserved | required to be preserved |

## See also
- [clear](/cpp/container/unordered_multiset/clear/)
