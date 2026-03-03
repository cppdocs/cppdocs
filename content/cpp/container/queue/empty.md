---
title: "std::queue<T,Container>::empty"
source_path: "cpp/container/queue/empty"
category: "container"
---

Checks if the underlying container has no elements. Equivalent to: return[c](/cpp/container/queue/#Member_objects).empty().

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
    std::queue<int> queue;
    assert(queue.empty());
 
    queue.push(42);
    assert(!queue.empty());
 
    queue.pop();
    assert(queue.empty());
}
```

## See also
- [size](/cpp/container/queue/size/)
- [empty](/cpp/iterator/empty/)
