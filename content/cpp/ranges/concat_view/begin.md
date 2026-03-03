---
title: "std::ranges::concat_view<Views...>::begin"
source_path: "cpp/ranges/concat_view/begin"
category: "ranges"
since: "C++26"
---

Returns an [iterator](/cpp/ranges/concat_view/iterator/) to the beginning of the [concat_view](/cpp/ranges/concat_view/).

## Declarations
```cpp
constexpr /*iterator*/<false> begin()
requires (!(/*simple-view*/<Views> && ...));
```
_(since C++26)_

```cpp
constexpr /*iterator*/<true> begin() const
requires (ranges::range<const Views> && ...) &&
/*concatable*/<const Views...>;
```
_(since C++26)_

## Return value
As specified above.

## Example
```cpp
#include <ranges>
#include <string_view>
using namespace std::literals;
 
int main()
{
    static constexpr auto c = {"🐱", "🐶"};
    static constexpr auto a = {"🤡"sv};
    static constexpr auto t = {"💚"sv};
    static constexpr auto cat{std::views::concat(c, a, t)};
    static_assert(*cat.begin() == "\U0001F431" and
                  cat.begin()[1] == "🐶" and
                  *(cat.begin() + 2) == "\N{CLOWN FACE}");
}
```

## See also
- [end](/cpp/ranges/concat_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
