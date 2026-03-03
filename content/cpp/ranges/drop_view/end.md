---
title: "std::ranges::drop_view<V>::end"
source_path: "cpp/ranges/drop_view/end"
category: "ranges"
since: "C++20"
---

Returns a sentinel or an iterator representing the end of the drop_view.

## Declarations
```cpp
constexpr auto end() requires (!/*simple-view*/<V>);
```
_(since C++20)_

```cpp
constexpr auto end() const requires ranges::range<const V>;
```
_(since C++20)_

## Return value
A sentinel or an iterator representing the end of the view.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <ranges>
 
int main()
{
    namespace ranges = std::ranges;
    constexpr char url[]{"https://cppreference.com"};
 
    const auto p = std::distance(ranges::begin(url), ranges::find(url, '/'));
    auto site = ranges::drop_view{url, p + 2}; // drop the prefix "https://"
 
    for (auto it = site.begin(); it != site.end(); ++it)
        std::cout << *it;
    std::cout << '\n';
}
```

## See also
- [begin](/cpp/ranges/drop_view/begin/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::end](/cpp/ranges/end/)
