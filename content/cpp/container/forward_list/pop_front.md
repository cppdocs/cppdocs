---
title: "std::forward_list<T,Allocator>::pop_front"
source_path: "cpp/container/forward_list/pop_front"
category: "container"
since: "C++11"
---

Removes the first element of the container. If there are no elements in the container, the behavior is undefined.

## Declarations
```cpp
void pop_front();
```
_(since C++11)_

## Return value
(none)

## Example
```cpp
#include <forward_list>
#include <iostream>
 
int main()
{
    std::forward_list<char> chars{'A', 'B', 'C', 'D'};
 
    for (; !chars.empty(); chars.pop_front())
        std::cout << "chars.front(): '" << chars.front() << "'\n";
}
```

## See also
- [push_front](/cpp/container/forward_list/push_front/)
- [front](/cpp/container/forward_list/front/)
