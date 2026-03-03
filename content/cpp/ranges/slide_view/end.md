---
title: "std::ranges::slide_view<V>::end"
source_path: "cpp/ranges/slide_view/end"
category: "ranges"
since: "C++23"
---

Returns a [sentinel](/cpp/ranges/slide_view/sentinel/) or an [iterator](/cpp/ranges/slide_view/iterator/) representing the end of the slide_view.

## Declarations
```cpp
constexpr auto end()
requires (!(/*simple-view*/<V> && /*slide-caches-nothing*/<const V>));
```
_(since C++23)_

```cpp
constexpr auto end() const
requires /*slide-caches-nothing*/<const V>;
```
_(since C++23)_

## Return value
A [sentinel](/cpp/ranges/slide_view/sentinel/) or an [iterator](/cpp/ranges/slide_view/iterator/) representing the end of the [slide_view](/cpp/ranges/slide_view/).

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    static constexpr auto source = {'A', 'B', 'C', 'D'};
 
    for (const auto subrange: source | std::views::slide(3))
    {
        std::cout << "[ ";
        for (auto it = subrange.begin(); it != subrange.end(); ++it)
            std::cout << *it << ' ';
        std::cout << "]\n";
    }
}
```

## See also
- [begin](/cpp/ranges/slide_view/begin/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::end](/cpp/ranges/end/)
