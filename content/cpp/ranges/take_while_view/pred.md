---
title: "std::ranges::take_while_view<V,Pred>::pred"
source_path: "cpp/ranges/take_while_view/pred"
category: "ranges"
since: "C++20"
---

Returns a reference to the stored predicate [pred_](/cpp/ranges/take_while_view/#Data_members).

## Declarations
```cpp
constexpr const Pred& pred() const;
```
_(since C++20)_

## Return value
A reference to the stored predicate.

## Example
```cpp
#include <ranges>
 
int main()
{
    static constexpr int a[]{1, 2, 3, 4, 5};
    constexpr auto v = a | std::views::take_while([](int x){ return x < 4; });
    const auto pred = v.pred();
    static_assert(pred(3));
}
```

## See also
- [base](/cpp/ranges/take_while_view/base/)
