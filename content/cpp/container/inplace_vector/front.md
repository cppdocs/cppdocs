---
title: "std::inplace_vector<T,N>::front"
source_path: "cpp/container/inplace_vector/front"
category: "container"
since: "C++26"
---

Returns a reference to the first element in the container.

## Declarations
```cpp
constexpr reference front();
```
_(since C++26)_

```cpp
constexpr const_reference front() const;
```
_(since C++26)_

## Return value
Reference to the first element.

## Notes
For a container c, the expression c.front() is equivalent to *c.begin().

## Example
```cpp
#include <cassert>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<char, 4> letters{'a', 'b', 'c', 'd'};
    assert(letters.front() == 'a');
}
```

## See also
- [back](/cpp/container/inplace_vector/back/)
- [rendcrend](/cpp/container/inplace_vector/rend/)
- [begincbegin](/cpp/container/inplace_vector/begin/)
- [data](/cpp/container/inplace_vector/data/)
