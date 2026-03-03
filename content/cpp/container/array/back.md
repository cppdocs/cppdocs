---
title: "std::array<T,N>::back"
source_path: "cpp/container/array/back"
category: "container"
---

Returns a reference to the last element in the container.

## Declarations
```cpp
reference back();
```
_(since C++11) (constexpr since C++17)_

```cpp
const_reference back() const;
```
_(since C++11) (constexpr since C++14)_

## Return value
Reference to the last element.

## Notes
For a non-empty container c, the expression c.back() is equivalent to *[std::prev](/cpp/iterator/prev/)(c.end()).

## Example
```cpp
#include <cassert>
#include <array>
 
int main()
{
    std::array<char, 4> letters{'a', 'b', 'c', 'd'};
    assert(letters.back() == 'd');
}
```

## See also
- [front](/cpp/container/array/front/)
- [rbegincrbegin](/cpp/container/array/rbegin/)
- [endcend](/cpp/container/array/end/)
