---
title: "std::ranges::drop_view<V>::size"
source_path: "cpp/ranges/drop_view/size"
category: "ranges"
since: "C++20"
---

Returns the number of elements.

## Declarations
```cpp
constexpr auto size() requires ranges::sized_range<V>;
```
_(since C++20)_

```cpp
constexpr auto size() const requires ranges::sized_range<const V>;
```
_(since C++20)_

## Return value
The number of elements.

## Example
```cpp
#include <array>
#include <ranges>
 
int main()
{
    constexpr std::array a{42, 43, 44};
    static_assert(std::ranges::drop_view{std::views::all(a), 0}.size() == 3);
    static_assert(std::ranges::drop_view{std::views::all(a), 1}.size() == 2);
    static_assert(std::ranges::drop_view{std::views::all(a), 2}.size() == 1);
    static_assert(std::ranges::drop_view{std::views::all(a), 3}.size() == 0);
    static_assert(std::ranges::drop_view{std::views::all(a), 4}.size() == 0);
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
