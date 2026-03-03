---
title: "std::ranges::iota_view<W, Bound>::empty"
source_path: "cpp/ranges/iota_view/empty"
category: "ranges"
since: "C++20"
---

Checks whether the range is empty (i.e. whether the beginning value is the same as the sentinel value).

## Declarations
```cpp
constexpr bool empty() const;
```
_(since C++20)_

## Return value
[value_](/cpp/ranges/iota_view/#value)==[bound_](/cpp/ranges/iota_view/#bound)

## Example
```cpp
#include <cassert>
#include <ranges>
 
int main()
{
    auto a = std::ranges::iota_view<int, int>();
    assert(a.empty());
 
    auto b = std::ranges::iota_view(4);
    assert(!b.empty());
 
    auto c = std::ranges::iota_view(4, 8);
    assert(!c.empty());
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4001 | C++20 | the inherited member empty function was not always valid | empty is always provided |

## See also
- [size](/cpp/ranges/iota_view/size/)
- [sized_range](/cpp/ranges/sized_range/)
