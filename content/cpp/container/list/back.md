---
title: "std::list<T,Allocator>::back"
source_path: "cpp/container/list/back"
category: "container"
---

Returns a reference to the last element in the container.

## Declarations
```cpp
reference back();
```

```cpp
const_reference back() const;
```

## Return value
Reference to the last element.

## Notes
For a non-empty container c, the expression c.back() is equivalent to *[std::prev](/cpp/iterator/prev/)(c.end()).

## Example
```cpp
#include <cassert>
#include <list>
 
int main()
{
    std::list<char> letters{'a', 'b', 'c', 'd'};
    assert(letters.back() == 'd');
}
```

## See also
- [front](/cpp/container/list/front/)
- [rbegincrbegin](/cpp/container/list/rbegin/)
- [endcend](/cpp/container/list/end/)
