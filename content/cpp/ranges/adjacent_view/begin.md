---
title: "std::ranges::adjacent_view<V,N>::begin"
source_path: "cpp/ranges/adjacent_view/begin"
category: "ranges"
since: "C++23"
---

Returns an [iterator](/cpp/ranges/adjacent_view/iterator/) to the first element of the [adjacent_view](/cpp/ranges/adjacent_view/).

## Declarations
```cpp
constexpr auto begin() requires (!__SimpleView<V>);
```
_(since C++23)_

```cpp
constexpr auto begin() const requires ranges::range<const V>;
```
_(since C++23)_

## Return value
Iterator to the first element.

## Example
```cpp
#include <ranges>
#include <tuple>
#include <type_traits>
 
int main()
{
    constexpr static auto v = {'A', 'B', 'C', 'D', 'E'};
 
    constexpr auto view = std::views::adjacent<3>(v);
 
    constexpr auto tuple = *view.begin();
 
    static_assert
    (
        std::is_same_v
        <
            decltype(tuple),
            const std::tuple<char const&, char const&, char const&>
        >
    );
 
    static_assert
    (
        std::get<0>(tuple) == 'A' &&
        std::get<1>(tuple) == 'B' &&
        std::get<2>(tuple) == 'C'
    );
}
```

## See also
- [end](/cpp/ranges/adjacent_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
