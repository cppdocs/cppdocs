---
title: "std::inplace_vector<T,N>::reserve"
source_path: "cpp/container/inplace_vector/reserve"
category: "container"
since: "C++26"
---

Does nothing, except that may throw [std::bad_alloc](/cpp/memory/new/bad_alloc/). The request to increase the capacity (i.e., the internal storage size) is ignored because [std::inplace_vector](/cpp/container/inplace_vector/)<T, N> is a fixed-capacity container.

## Declarations
```cpp
static constexpr void reserve( size_type new_cap );
```
_(since C++26)_

## Parameters
- `new_cap`: new capacity of the inplace_vector, in number of elements

## Return value
(none)

## Notes
This function exists for compatibility with vector-like interfaces.

## Example
```cpp
#include <cassert>
#include <inplace_vector>
#include <iostream>
 
int main()
{
    std::inplace_vector<int, 4> v{1, 2, 3};
    assert(v.capacity() == 4 && v.size() == 3);
 
    v.reserve(2); // does nothing
    assert(v.capacity() == 4 && v.size() == 3);
 
    try
    {
        v.reserve(13); // throws, because requested capacity > N; v is left unchanged
    }
    catch(const std::bad_alloc& ex)
    {
        std::cout << ex.what() << '\n';
    }
    assert(v.capacity() == 4 && v.size() == 3);
}
```

## See also
- [size](/cpp/container/inplace_vector/size/)
- [max_size](/cpp/container/inplace_vector/max_size/)
- [resize](/cpp/container/inplace_vector/resize/)
- [capacity](/cpp/container/inplace_vector/capacity/)
- [shrink_to_fit](/cpp/container/inplace_vector/shrink_to_fit/)
