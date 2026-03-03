---
title: "std::ranges::drop_while_view<V,Pred>::begin"
source_path: "cpp/ranges/drop_while_view/begin"
category: "ranges"
since: "C++20"
---

Returns an iterator to the first element of the view.

## Declarations
```cpp
constexpr auto begin();
```
_(since C++20)_

## Return value
Iterator to the first element of the view.

## Example
```cpp
#include <cassert>
#include <ranges>
 
int main()
{
    static constexpr auto data = {0, -1, -2, 3, 1, 4, 1, 5};
    auto view = std::ranges::drop_while_view{data, [](int x){ return x <= 0; }};
    assert(view.begin()[0] == 3);
}
```

## See also
- [end](/cpp/ranges/drop_while_view/end/)
