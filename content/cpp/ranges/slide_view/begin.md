---
title: "std::ranges::slide_view<V>::begin"
source_path: "cpp/ranges/slide_view/begin"
category: "ranges"
since: "C++23"
---

Returns an iterator to the first element of the slide_view.

## Declarations
```cpp
constexpr auto begin()
requires (!(/*simple-view*/<V> && /*slide-caches-nothing*/<const V>));
```
_(since C++23)_

```cpp
constexpr auto begin() const
requires /*slide-caches-nothing*/<const V>;
```
_(since C++23)_

## Return value
An [iterator](/cpp/ranges/slide_view/iterator/) to the first element of [slide_view](/cpp/ranges/slide_view/), which points to the [n_](/cpp/ranges/slide_view/#Data_members)-sized subrange of the possibly const-qualified underlying view type – V for overload ([1](#Version_1)) or const V for overload ([2](#Version_2)).

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
using namespace std::literals;
 
int main()
{
    static constexpr auto source = {"∀x"sv, "∃y"sv, "ε"sv, "δ"sv};
    auto view{std::ranges::slide_view(source, 2)};
    const auto subrange{*(view.begin())};
    for (std::string_view const s : subrange)
        std::cout << s << ' ';
    std::cout << '\n';
}
```

## See also
- [end](/cpp/ranges/slide_view/end/)
- [operator==](/cpp/ranges/slide_view/sentinel/operator_cmp/)
