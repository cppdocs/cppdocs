---
title: "std::ranges::drop_view<V>::base"
source_path: "cpp/ranges/drop_view/base"
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
A copy of the underlying (adapted) view [base_](/cpp/ranges/drop_view/#Data_members).

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
    constexpr auto view = a | std::views::drop(2);
    stq::println("{}", view);
    const auto base = view.base();
    stq::println("{}", base);
}
```
