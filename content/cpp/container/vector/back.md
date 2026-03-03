---
title: "std::vector<T,Allocator>::back"
source_path: "cpp/container/vector/back"
category: "container"
---

Returns a reference to the last element in the container.

## Declarations
```cpp
reference back();
```
_(constexpr since C++20)_

```cpp
const_reference back() const;
```
_(constexpr since C++20)_

## Return value
Reference to the last element.

## Notes
For a non-empty container c, the expression c.back() is equivalent to *[std::prev](/cpp/iterator/prev/)(c.end()).

## Example
```cpp
#include <cassert>
#include <vector>
 
int main()
{
    std::vector<char> letters{'a', 'b', 'c', 'd'};
    assert(letters.back() == 'd');
}
```

## See also
- [front](/cpp/container/vector/front/)
- [rbegincrbegin](/cpp/container/vector/rbegin/)
- [endcend](/cpp/container/vector/end/)
