---
title: "std::deque<T,Allocator>::prepend_range"
source_path: "cpp/container/deque/prepend_range"
category: "container"
since: "C++23"
---

Inserts, in non-reversing order, copies of elements in rg before [begin()](/cpp/container/deque/begin/). Each iterator in the range rg is dereferenced exactly once.

## Declarations
```cpp
template< container-compatible-range<T> R >
void prepend_range( R&& rg );
```
_(since C++23)_

## Parameters
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to T

## Return value
(none)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges-aware construction and insertion

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <deque>
#include <vector>
 
int main()
{
    auto container = std::deque{0, 1, 2, 3};
    const auto rg = std::vector{-3, -2, -1};
 
#if __cpp_lib_containers_ranges
    container.prepend_range(rg);
#else
    container.insert(container.begin(), rg.cbegin(), rg.cend());
#endif
    assert(std::ranges::equal(container, std::deque{-3, -2, -1, 0, 1, 2, 3}));
}
```

## See also
- [append_range](/cpp/container/deque/append_range/)
- [insert_range](/cpp/container/deque/insert_range/)
- [push_front](/cpp/container/deque/push_front/)
- [emplace_front](/cpp/container/deque/emplace_front/)
