---
title: "std::ranges::split_view<V,Pattern>::end"
source_path: "cpp/ranges/split_view/end"
category: "ranges"
since: "C++20"
---

Returns an [iterator](/cpp/ranges/split_view/iterator/) or a [sentinel](/cpp/ranges/split_view/sentinel/) representing the end of the resulting subrange. Equivalent to:

## Declarations
```cpp
constexpr auto end() const;
```
_(since C++20)_

## Return value
An [iterator](/cpp/ranges/split_view/iterator/) or a [sentinel](/cpp/ranges/split_view/sentinel/).

## Example
```cpp
#include <cassert>
#include <ranges>
#include <string_view>
 
int main()
{
    constexpr std::string_view keywords{"bitand bitor bool break"};
    std::ranges::split_view kw{keywords, ' '};
    assert(4 == std::ranges::distance(kw.begin(), kw.end()));
}
```

## See also
- [begin](/cpp/ranges/split_view/begin/)
- [end](/cpp/ranges/lazy_split_view/end/)
- [ranges::end](/cpp/ranges/end/)
