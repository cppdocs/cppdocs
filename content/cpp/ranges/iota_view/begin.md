---
title: "std::ranges::iota_view<W, Bound>::begin"
source_path: "cpp/ranges/iota_view/begin"
category: "ranges"
since: "C++20"
---

Obtains an [iterator](/cpp/ranges/iota_view/iterator/) to the beginning value.

## Declarations
```cpp
constexpr /*iterator*/ begin() const;
```
_(since C++20)_

## Return value
[iterator](/cpp/ranges/iota_view/iterator/) ﻿{[value_](/cpp/ranges/iota_view/#value) ﻿}

## Example
```cpp
#include <iostream>
#include <ranges>
 
int main()
{
    auto iota{std::views::iota(2, 6)};
    auto iter{iota.begin()};
    while (iter != iota.end())
        std::cout << *iter++ << ' ';
    std::cout << '\n';
}
```
