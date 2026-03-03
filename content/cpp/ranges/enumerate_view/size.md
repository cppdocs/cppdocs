---
title: "std::ranges::enumerate_view<V>::size"
source_path: "cpp/ranges/enumerate_view/size"
category: "ranges"
since: "C++23"
---

Returns the number of elements. Equivalent to return [ranges::size](/cpp/ranges/size/)(base_);, where [base_](/cpp/ranges/enumerate_view/#Data_members) is the underlying view.

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
The number of elements.

## Example
```cpp
#include <cassert>
#include <forward_list>
#include <ranges>
#include <string_view>
 
int main()
{
    constexpr static auto v1 = {1, 2, 3, 4, 5};
    constexpr auto ev1{v1 | std::views::enumerate};
    static_assert(ev1.size() == 5);
    static_assert(std::ranges::sized_range<decltype(v1)>);
 
    auto v2 = std::forward_list{1, 2, 3, 4, 5};
    auto ev2 {v2 | std::views::enumerate};
    static_assert(not std::ranges::sized_range<decltype(v2)>);
    // auto size = ev2.size(); // Error: v2 is not a sized range
    assert(std::ranges::distance(v2) == 5); // OK, distance does not require sized
                                            // range, but has O(N) complexity here
}
```

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
