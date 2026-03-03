---
title: "std::ranges::lazy_split_view<V,Pattern>::end"
source_path: "cpp/ranges/lazy_split_view/end"
category: "ranges"
since: "C++20"
---

Returns an iterator or sometimes a sentinel representing the end of the [view](/cpp/ranges/view/). Let [base_](/cpp/ranges/lazy_split_view/#base) be the underlying view.

## Declarations
```cpp
constexpr auto end() requires ranges::forward_range<V> && ranges::common_range<V>;
```
_(since C++20)_

```cpp
constexpr auto end() const;
```
_(since C++20)_

## Return value
An [outer_iterator](/cpp/ranges/lazy_split_view/outer_iterator/) or a [std::default_sentinel](/cpp/iterator/default_sentinel/) representing the end of the [view](/cpp/ranges/view/).

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
 
int main()
{
    constexpr std::string_view keywords{"false float for friend"};
    std::ranges::lazy_split_view kw{keywords, ' '};
    const auto count = std::ranges::distance(kw.begin(), kw.end());
    std::cout << "Words count: " << count << '\n';
}
```

## See also
- [begin](/cpp/ranges/lazy_split_view/begin/)
- [end](/cpp/ranges/split_view/end/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::end](/cpp/ranges/end/)
