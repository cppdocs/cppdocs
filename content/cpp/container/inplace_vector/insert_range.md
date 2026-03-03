---
title: "std::inplace_vector<T,N>::insert_range"
source_path: "cpp/container/inplace_vector/insert_range"
category: "container"
since: "C++26"
---

Inserts, in non-reversing order, copies of elements in rg before pos.

## Declarations
```cpp
template< container-compatible-range<T> R >
constexpr iterator insert_range( const_iterator pos, R&& rg );
```
_(since C++26)_

## Parameters
- `pos`: iterator before which the content will be inserted (pos may be the end() iterator)
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
An [iterator](/cpp/container/inplace_vector/#Member_types) that points at the copy of the first element inserted into inplace_vector or at pos if rg is empty.

## Example
```cpp
#include <cassert>
#include <inplace_vector>
#include <iterator>
#include <new>
#include <print>
 
int main()
{
    auto v = std::inplace_vector<int, 8>{0, 1, 2, 3};
    auto pos = std::next(v.begin(), 2);
    assert(*pos == 2);
    const auto rg = {-1, -2, -3};
    v.insert_range(pos, rg);
    std::println("{}", v);
 
    try
    {
        assert(v.size() + rg.size() > v.capacity());
        v.insert_range(pos, rg); // throws: no space
    }
    catch(const std::bad_alloc& ex)
    {
        std::println("{}", ex.what());
    }
}
```

## See also
- [insert](/cpp/container/inplace_vector/insert/)
- [append_range](/cpp/container/inplace_vector/append_range/)
- [try_append_range](/cpp/container/inplace_vector/try_append_range/)
