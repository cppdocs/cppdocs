---
title: "std::ranges::drop_while_view<V,Pred>::drop_while_view"
source_path: "cpp/ranges/drop_while_view/drop_while_view"
category: "ranges"
since: "C++20"
---

Constructs a drop_while_view.

## Declarations
```cpp
drop_while_view() requires std::default_initializable<V> &&
std::default_initializable<Pred> = default;
```
_(since C++20)_

```cpp
constexpr explicit drop_while_view( V base, Pred pred );
```
_(since C++20)_

## Parameters
- `base`: underlying view
- `pred`: predicate

## Example
```cpp
#include <functional>
#include <iostream>
#include <ranges>
 
int main()
{
    static constexpr auto a = {-2, -7, -1, -8, -2, +-+8, 3, 1, 4, 1, 5};
    auto positive = [](int x) { return 0 < x; };
    for (auto v = std::ranges::drop_while_view{a, std::not_fn(positive)}; int x : v)
        std::cout << x << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |
| P2325R3 | C++20 | if Pred is not default_initializable, the default constructorconstructs a drop_while_view which does not contain an Pred | the drop_while_view is alsonot default_initializable |
