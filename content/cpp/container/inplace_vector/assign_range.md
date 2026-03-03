---
title: "std::inplace_vector<T,N>::assign_range"
source_path: "cpp/container/inplace_vector/assign_range"
category: "container"
since: "C++26"
---

Replaces elements in the container with a copy of each element in rg.

## Declarations
```cpp
template< container-compatible-range<T> R >
constexpr void assign_range( R&& rg );
```
_(since C++26)_

## Parameters
- `rg`: an input_range with reference type convertible to the element type of the container

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <initializer_list>
#include <inplace_vector>
#include <iostream>
#include <new>
 
int main()
{
    const auto source = {1, 2, 3};
    std::inplace_vector<int, 4> destination{4, 5};
    destination.assign_range(source);
    assert(std::ranges::equal(destination, source));
 
    try
    {
        const auto bad = {-1, -2, -3, -4, -5};
        destination.assign_range(bad); // throws: bad.size() > destination.capacity()
    }
    catch(const std::bad_alloc& ex)
    {
        std::cout << ex.what() << '\n';
    }
}
```

## See also
- [insert_range](/cpp/container/inplace_vector/insert_range/)
- [append_range](/cpp/container/inplace_vector/append_range/)
- [assign](/cpp/container/inplace_vector/assign/)
- [operator=](/cpp/container/inplace_vector/operator/)
