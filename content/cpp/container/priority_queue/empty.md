---
title: "std::priority_queue<T,Container,Compare>::empty"
source_path: "cpp/container/priority_queue/empty"
category: "container"
---

Checks if the underlying container has no elements. Equivalent to: return[c](/cpp/container/priority_queue/#Member_objects).empty().

## Declarations
```cpp
bool empty() const;
```

## Return value
true if the underlying container is empty, false otherwise.

## Example
```cpp
#include <cassert>
#include <queue>
 
int main()
{
    std::priority_queue<int> queue;
    assert(queue.empty());
 
    queue.push(42);
    assert(!queue.empty());
 
    queue.pop();
    assert(queue.empty());
}
```

## See also
- [size](/cpp/container/priority_queue/size/)
- [empty](/cpp/iterator/empty/)
