---
title: "std::deque"
source_path: "cpp/container/deque"
header: "<deque>"
---

std::deque (double-ended queue) is an indexed sequence container that allows fast insertion and deletion at both its beginning and its end. In addition, insertion and deletion at either end of a deque never invalidates pointers or references to the rest of the elements.

## Declarations
```cpp
template<
class T,
class Allocator = std::allocator<T>
> class deque;
```

```cpp
namespace pmr {
template< class T >
using deque = std::deque<T, std::pmr::polymorphic_allocator<T>>;
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
#include <deque>
#include <iostream>
 
int main()
{
    // Create a deque containing integers
    std::deque<int> d = {7, 5, 16, 8};
 
    // Add an integer to the beginning and end of the deque
    d.push_front(13);
    d.push_back(25);
 
    // Iterate and print values of deque
    for (int n : d)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 230 | C++98 | T was not required to be CopyConstructible(an element of type T might not be able to be constructed) | T is also required tobe CopyConstructible |

## See also
- [queue](/cpp/container/queue/)
