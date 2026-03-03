---
title: "std::inplace_vector<T,N>::append_range"
source_path: "cpp/container/inplace_vector/append_range"
category: "container"
since: "C++26"
---

Inserts copies of elements from the range rg before [end()](/cpp/container/inplace_vector/end/), in non-reversing order.

## Declarations
```cpp
template< container-compatible-range<T> R >
constexpr void append_range( R&& rg );
```
_(since C++26)_

## Parameters
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
(none)

## Example
```cpp
#include <cassert>
#include <inplace_vector>
#include <iostream>
 
int main()
{
    using I = std::inplace_vector<int, 8>;
    auto head = I{1, 2, 3, 4};
    const auto tail = {-5, -6, -7};
    head.append_range(tail);
    assert(head.size() == 7 and (head == I{1, 2, 3, 4, -5, -6, -7}));
    try
    {
        head.append_range(tail); // throws: no space
    }
    catch(const std::bad_alloc&)
    {
        std::cout << "std::bad_alloc\n";
    }
}
```

## See also
- [try_append_range](/cpp/container/inplace_vector/try_append_range/)
- [insert_range](/cpp/container/inplace_vector/insert_range/)
- [push_back](/cpp/container/inplace_vector/push_back/)
- [emplace_back](/cpp/container/inplace_vector/emplace_back/)
