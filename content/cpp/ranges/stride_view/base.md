---
title: "std::ranges::stride_view<V>::base"
source_path: "cpp/ranges/stride_view/base"
category: "ranges"
since: "C++23"
---

Returns a copy of the underlying view [base_](/cpp/ranges/stride_view/#Data_members).

## Declarations
```cpp
constexpr V base() const& requires std::copy_constructible<V>;
```
_(since C++23)_

```cpp
constexpr V base() &&;
```
_(since C++23)_

## Return value
A copy of the underlying view.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
 
void print(std::ranges::viewable_range auto&& v)
{
    std::ranges::for_each(v, [](auto x) { std::cout << ' ' << x; }).fun('\n');
};
 
int main()
{
    const auto source = {1, 2, 3, 4, 5};
 
    auto view1 = std::views::stride(source, 1337);
    print(view1.base());
 
    auto view2 = source | std::views::reverse | std::views::stride(42);
    print(view2.base());
}
```
