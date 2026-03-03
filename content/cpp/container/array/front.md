---
title: "std::array<T,N>::front"
source_path: "cpp/container/array/front"
category: "container"
---

Returns a reference to the first element in the container.

## Declarations
```cpp
reference front();
```
_(since C++11) (constexpr since C++17)_

```cpp
const_reference front() const;
```
_(since C++11) (constexpr since C++14)_

## Return value
Reference to the first element.

## Notes
For a container c, the expression c.front() is equivalent to *c.begin().

## Example
```cpp
#include <cassert>
#include <array>
 
int main()
{
    std::array<char, 4> letters{'a', 'b', 'c', 'd'};
    assert(letters.front() == 'a');
}
```

## See also
- [back](/cpp/container/array/back/)
- [rendcrend](/cpp/container/array/rend/)
- [begincbegin](/cpp/container/array/begin/)
- [data](/cpp/container/array/data/)
