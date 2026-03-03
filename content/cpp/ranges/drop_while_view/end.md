---
title: "std::ranges::drop_while_view<V,Pred>::end"
source_path: "cpp/ranges/drop_while_view/end"
category: "ranges"
since: "C++20"
---

Returns a sentinel or an iterator representing the end of the drop_while_view.

## Declarations
```cpp
constexpr auto end();
```
_(since C++20)_

## Return value
A sentinel or an iterator representing the end of the view.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <ranges>
 
int main()
{
    static constexpr auto data = {0, -1, -2, 3, 1, 4, 1, 5}; 
    auto view = std::ranges::drop_while_view{data, [](int x) { return x <= 0; }};
    assert(view.end()[-1] == 5);
}
```

## See also
- [begin](/cpp/ranges/drop_while_view/begin/)
