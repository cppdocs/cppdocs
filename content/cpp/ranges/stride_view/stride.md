---
title: "std::ranges::stride_view<V>::stride"
source_path: "cpp/ranges/stride_view/stride"
category: "ranges"
since: "C++23"
---

Returns a copy of the underlying stride object [stride_](/cpp/ranges/stride_view/#Data_members).
Equivalent to return stride_;.

## Declarations
```cpp
constexpr ranges::range_difference_t<_Vp> stride() const noexcept;
```
_(since C++23)_

## Return value
The stride value.

## Example
```cpp
#include <ranges>
 
int main()
{
    constexpr auto view = std::views::iota(1337)
                        | std::views::stride(42);
    static_assert(view.stride() == 42);
}
```
