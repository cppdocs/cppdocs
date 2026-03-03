---
title: "std::inplace_vector<T,N>::back"
source_path: "cpp/container/inplace_vector/back"
category: "container"
since: "C++26"
---

Returns a reference to the last element in the container.

## Declarations
```cpp
constexpr reference back();
```
_(since C++26)_

```cpp
constexpr const_reference back() const;
```
_(since C++26)_

## Return value
Reference to the last element.

## Notes
For a non-empty container c, the expression c.back() is equivalent to *[std::prev](/cpp/iterator/prev/)(c.end()).

## Example
```cpp
#include <cassert>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<char, 4> letters{'a', 'b', 'c', 'd'};
    assert(letters.back() == 'd');
}
```

## See also
- [front](/cpp/container/inplace_vector/front/)
- [rbegincrbegin](/cpp/container/inplace_vector/rbegin/)
- [endcend](/cpp/container/inplace_vector/end/)
