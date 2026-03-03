---
title: "std::list"
source_path: "cpp/container/list"
header: "<list>"
category: "container"
since: "C++17"
---

std::list is a container that supports constant time insertion and removal of elements from anywhere in the container. Fast random access is not supported. It is usually implemented as a doubly-linked list. Compared to [std::forward_list](/cpp/container/forward_list/) this container provides bidirectional iteration capability while being less space efficient.

## Declarations
```cpp
template<
class T,
class Allocator = std::allocator<T>
> class list;
```

```cpp
namespace pmr {
template< class T >
using list = std::list<T, std::pmr::polymorphic_allocator<T>>;
}
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges construction and insertion for containers

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <list>
 
int main()
{
    // Create a list containing integers
    std::list<int> l = {7, 5, 16, 8};
 
    // Add an integer to the front of the list
    l.push_front(25);
    // Add an integer to the back of the list
    l.push_back(13);
 
    // Insert an integer before 16 by searching
    auto it = std::find(l.begin(), l.end(), 16);
    if (it != l.end())
        l.insert(it, 42);
 
    // Print out the list
    std::cout << "l = { ";
    for (int n : l)
        std::cout << n << ", ";
    std::cout << "};\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 230 | C++98 | T was not required to be CopyConstructible(an element of type T might not be able to be constructed) | T is also required tobe CopyConstructible |
| LWG 276 | C++98 | T was always required to be CopyAssignable | only required if operator= orassign is instantiated with T |

## See also
- [forward_list](/cpp/container/forward_list/)
