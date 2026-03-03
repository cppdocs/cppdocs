---
title: "std::queue<T,Container>::size"
source_path: "cpp/container/queue/size"
category: "container"
---

Returns the number of elements in the container adaptor. Equivalent to: return[c](/cpp/container/queue/#Member_objects).size().

## Declarations
```cpp
size_type size() const;
```

## Return value
The number of elements in the container adaptor.

## Example
```cpp
#include <cassert>
#include <queue>
 
int main()
{
    std::queue<int> queue;
    assert(queue.size() == 0);
 
    const int count = 8;
    for (int i = 0; i != count; ++i)
        queue.push(i);
    assert(queue.size() == count);
}
```

## See also
- [empty](/cpp/container/queue/empty/)
- [sizessize](/cpp/iterator/size/)
