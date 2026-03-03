---
title: "std::ranges::stride_view<V>::size"
source_path: "cpp/ranges/stride_view/size"
category: "ranges"
since: "C++23"
---

Returns the number of elements.

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<V>;
```
_(since C++23)_

```cpp
constexpr auto size() const requires ranges::sized_range<const V>;
```
_(since C++23)_

## Return value
The number of elements. The returned value is calculated as if by expression

## Example
```cpp
#include <forward_list>
#include <ranges>
 
int main()
{
    namespace vs = std::views;
    constexpr static auto v = {1, 2, 3, 4, 5};
    static_assert
    (
        vs::stride(v, 1).size() == 5 and
        vs::stride(v, 2).size() == 3 and
        vs::stride(v, 3).size() == 2 and
        vs::stride(v, 4).size() == 2 and
        vs::stride(v, 5).size() == 1 and
        vs::stride(v, 6).size() == 1
    );
 
    std::forward_list list{v};
//  auto s = vs::stride(list, 2).size(); // Error: not a sized_range
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
