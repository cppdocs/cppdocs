---
title: "std::ranges::iota_view<W, Bound>::size"
source_path: "cpp/ranges/iota_view/size"
category: "ranges"
since: "C++20"
---

Returns the size of the view if the view is bounded.

## Declarations
```cpp
constexpr auto size() const
requires (std::same_as<W, Bound> && /*advanceable*/<W>) ||
(/*is-integer-like*/<W> && /*is-integer-like*/<Bound>) ||
std::sized_sentinel_for<Bound, W>;
```
_(since C++20)_

## Return value
If any of W and Bound is not a [integer-like type](/cpp/iterator/is-integer-like/), returns [to-unsigned-like](/cpp/ranges/#to-unsigned-like) ﻿([bound_](/cpp/ranges/iota_view/#bound)-[value_](/cpp/ranges/iota_view/#value) ﻿).

## Example
```cpp
#include <cassert>
#include <ranges>
 
int main()
{
    unsigned initial_value{1}, bound{5};
    auto i{std::views::iota(initial_value, bound)};
    assert(i.size() == bound - initial_value and i.size() == 4);
 
    auto u{std::views::iota(8)};
    // assert(u.size()); // Error: size() is not present since “u” is unbounded
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3610 | C++20 | size might reject integer-class types | accept if possible |

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::ssize](/cpp/ranges/ssize/)
