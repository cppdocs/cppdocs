---
title: "std::inplace_vector<T,N>::capacity"
source_path: "cpp/container/inplace_vector/capacity"
category: "container"
since: "C++26"
---

Returns the capacity of the internal (inplace) storage. Equivalent to: return N;.

## Declarations
```cpp
static constexpr size_type capacity() noexcept;
```
_(since C++26)_

## Return value
The maximum number of elements the container is able to hold.

## Notes
Because each [std::inplace_vector](/cpp/container/inplace_vector/)<T, N> is a fixed-capacity container, the value returned by capacity equals N (which is also the value returned by max_size()).

## Example
```cpp
#include <inplace_vector>
 
int main()
{
    constexpr std::inplace_vector<int, 4> v1;
    static_assert(v1.capacity() == 4 && v1.max_size() == 4);
 
    constexpr std::inplace_vector<int, 0> v2;
    static_assert(v2.capacity() == 0 && v2.max_size() == 0);
}
```

## See also
- [max_size](/cpp/container/inplace_vector/max_size/)
- [size](/cpp/container/inplace_vector/size/)
- [resize](/cpp/container/inplace_vector/resize/)
- [empty](/cpp/container/inplace_vector/empty/)
- [reserve](/cpp/container/inplace_vector/reserve/)
