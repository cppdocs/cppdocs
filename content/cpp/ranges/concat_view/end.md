---
title: "std::ranges::concat_view<Views...>::end"
source_path: "cpp/ranges/concat_view/end"
category: "ranges"
since: "C++26"
---

Returns an [iterator](/cpp/ranges/concat_view/iterator/) or [std::default_sentinel](/cpp/iterator/default_sentinel/) that compares equal to the past-the-end iterator of the [concat_view](/cpp/ranges/concat_view/).

## Declarations
```cpp
constexpr auto end()
requires (!(/*simple-view*/<Views> && ...));
```
_(since C++26)_

```cpp
constexpr auto end() const
requires (ranges::range<const Views> && ...) &&
/*concatable*/<const Views...>;
```
_(since C++26)_

## Return value
As described above.

## Example
```cpp
#include <concepts>
#include <iterator>
#include <ranges>
 
int main()
{
    static constexpr int p[]{37, 42, 69};
    static constexpr auto q = {19937, 1729};
    constexpr auto cat = std::ranges::views::concat(p, q);
    static_assert(not std::same_as<std::default_sentinel_t, decltype(cat.end())>);
    static_assert(cat.end()[-1] == 1729);
}
```

## See also
- [begin](/cpp/ranges/concat_view/begin/)
- [ranges::end](/cpp/ranges/end/)
