---
title: "std::queue"
source_path: "cpp/container/queue"
header: "<queue>"
---

The std::queue class template is a [container adaptor](/cpp/container/#Container_adaptors) that gives the functionality of a [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) - specifically, a FIFO (first-in, first-out) data structure.

## Declarations
```cpp
template<
class T,
class Container = std::deque<T>
> class queue;
```

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
#include <cassert>
#include <iostream>
#include <queue>
 
int main()
{
    std::queue<int> q;
 
    q.push(0); // back pushes 0
    q.push(1); // q = 0 1
    q.push(2); // q = 0 1 2
    q.push(3); // q = 0 1 2 3
 
    assert(q.front() == 0);
    assert(q.back() == 3);
    assert(q.size() == 4);
 
    q.pop(); // removes the front element, 0
    assert(q.size() == 3);
 
    // Print and remove all elements. Note that std::queue does not
    // support begin()/end(), so a range-for-loop cannot be used.
    std::cout << "q: ";
    for (; !q.empty(); q.pop())
        std::cout << q.front() << ' ';
    std::cout << '\n';
    assert(q.size() == 0);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 307 | C++98 | std::queue did not support containers using proxyreference types[1] in place of (const) value_type& | supported |
| LWG 2566 | C++98 | Missing the requirement for Container::value_type | ill-formed if T is not the same type as Container::value_type |

## See also
- [priority_queue](/cpp/container/priority_queue/)
- [deque](/cpp/container/deque/)
- [list](/cpp/container/list/)
