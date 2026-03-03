---
title: "std::list<T,Allocator>::front"
source_path: "cpp/container/list/front"
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
#include <list>
 
int main()
{
    std::list<char> letters{'a', 'b', 'c', 'd'};
    assert(letters.front() == 'a');
}
```

## See also
- [back](/cpp/container/list/back/)
- [rendcrend](/cpp/container/list/rend/)
- [begincbegin](/cpp/container/list/begin/)
