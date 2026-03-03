---
title: "std::map<Key,T,Compare,Allocator>::erase"
source_path: "cpp/container/map/erase"
category: "container"
since: "C++11"
---

Removes specified elements from the container.

## Declarations
```cpp
iterator erase( iterator pos );
```

```cpp
iterator erase( const_iterator pos );
```
_(since C++11)_

```cpp
iterator erase( iterator first, iterator last );
```
_(until C++11)_

```cpp
iterator erase( const_iterator first, const_iterator last );
```
_(since C++11)_

```cpp
size_type erase( const Key& key );
```

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
#include <map>
#include <iostream>
 
int main()
{
    std::map<int, std::string> c =
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
| LWG 130 | C++98 | the return type of overloads (1) and (3) was void (it is notconsistent with the erase() requirement on sequence containers) | corrected to iterator |
| LWG 2059 | C++11 | replacing overload (1) with overload (2) introduced new ambiguity | added overload (1) back |

## See also
- [clear](/cpp/container/map/clear/)
