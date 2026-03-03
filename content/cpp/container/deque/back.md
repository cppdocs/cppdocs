---
title: "std::deque<T,Allocator>::back"
source_path: "cpp/container/deque/back"
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
#include <deque>
 
int main()
{
    std::deque<char> letters{'a', 'b', 'c', 'd'};
    assert(letters.back() == 'd');
}
```

## See also
- [front](/cpp/container/deque/front/)
- [rbegincrbegin](/cpp/container/deque/rbegin/)
- [endcend](/cpp/container/deque/end/)
