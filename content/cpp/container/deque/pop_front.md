---
title: "std::deque<T,Allocator>::pop_front"
source_path: "cpp/container/deque/pop_front"
category: "container"
---

Removes the first element of the container. If there are no elements in the container, the behavior is undefined.

## Declarations
```cpp
void pop_front();
```

## Return value
(none)

## Example
```cpp
#include <deque>
#include <iostream>
 
int main()
{
    std::deque<char> chars{'A', 'B', 'C', 'D'};
 
    for (; !chars.empty(); chars.pop_front())
        std::cout << "chars.front(): '" << chars.front() << "'\n";
}
```

## See also
- [pop_back](/cpp/container/deque/pop_back/)
- [push_front](/cpp/container/deque/push_front/)
- [front](/cpp/container/deque/front/)
