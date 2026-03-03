---
title: "std::inplace_vector<T,N>::empty"
source_path: "cpp/container/inplace_vector/empty"
category: "container"
since: "C++26"
---

Checks if the container has no elements, i.e. whether begin() == end().

## Declarations
```cpp
constexpr bool empty() const noexcept;
```
_(since C++26)_

## Return value
true if the container is empty, false otherwise.

## Example
```cpp
#include <cassert>
#include <inplace_vector>
 
int main()
{
    std::inplace_vector<char, 8> v;
    assert(v.empty());
 
    v.push_back('_');
    assert(not v.empty());
}
```

## See also
- [size](/cpp/container/inplace_vector/size/)
- [empty](/cpp/iterator/empty/)
