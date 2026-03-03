---
title: "std::deque<T,Allocator>::front"
source_path: "cpp/container/deque/front"
category: "container"
---

Returns a reference to the first element in the container.

## Declarations
```cpp
reference front();
```

```cpp
const_reference front() const;
```

## Return value
Reference to the first element.

## Notes
For a container c, the expression c.front() is equivalent to *c.begin().

## Example
```cpp
#include <cassert>
#include <deque>
 
int main()
{
    std::deque<char> letters{'a', 'b', 'c', 'd'};
    assert(letters.front() == 'a');
}
```

## See also
- [back](/cpp/container/deque/back/)
- [rendcrend](/cpp/container/deque/rend/)
- [begincbegin](/cpp/container/deque/begin/)
