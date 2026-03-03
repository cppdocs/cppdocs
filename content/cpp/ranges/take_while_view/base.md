---
title: "std::ranges::take_while_view<V,Pred>::base"
source_path: "cpp/ranges/take_while_view/base"
category: "ranges"
since: "C++20"
---

Returns a copy of the underlying view.

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++20)_

```cpp
constexpr V base() &&;
```
_(since C++20)_

## Return value
A copy of the underlying view.

## Example
```cpp
#include <iostream>
#include <ranges>
 
namespace stq {
void println(auto, const auto& v)
{
    for (const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
}
 
int main()
{
    static constexpr int a[]{1, 2, 3, 4, 5};
    constexpr auto view = a | std::views::take_while([](int x){ return x < 4; });
    stq::println("{}", view);
    const auto base = view.base();
    stq::println("{}", base);
}
```

## See also
- [pred](/cpp/ranges/take_while_view/pred/)
