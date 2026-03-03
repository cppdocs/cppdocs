---
title: "std::ranges::iota_view<W, Bound>::end"
source_path: "cpp/ranges/iota_view/end"
category: "ranges"
since: "C++20"
---

1) Obtains a [sentinel](/cpp/ranges/iota_view/sentinel/) representing the sentinel value:
If Bound is [std::unreachable_sentinel_t](/cpp/iterator/unreachable_sentinel_t/), returns [std::unreachable_sentinel](/cpp/iterator/unreachable_sentinel_t/).Otherwise, returns [sentinel](/cpp/ranges/iota_view/sentinel/) ﻿{[bound_](/cpp/ranges/iota_view/#bound) ﻿}.

## Declarations
```cpp
constexpr auto end() const;
```
_(since C++20)_

```cpp
constexpr /*iterator*/ end() const requires std::same_as<W, Bound>;
```
_(since C++20)_

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    auto iota{std::views::iota(2, 6)};
    auto end{iota.end()};
    for (auto iter{iota.begin()}; iter != end; ++iter)
        std::cout << *iter << ' ';
    std::cout << '\n';
}
```
