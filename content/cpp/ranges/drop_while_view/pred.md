---
title: "std::ranges::drop_while_view<V,Pred>::pred"
source_path: "cpp/ranges/drop_while_view/pred"
category: "ranges"
since: "C++20"
---

Returns a reference to the stored predicate.

## Declarations
```cpp
constexpr const Pred& pred() const;
```
_(since C++20)_

## Return value
A reference to the stored predicate [pred_](/cpp/ranges/drop_while_view/#Data_members).

## Example
```cpp
#include <array>
#include <iomanip>
#include <iostream>
#include <ranges>
 
int main()
{
    constexpr std::array data{0, -1, -2, 3, 1, 4, 1, 5};
 
    auto view = std::ranges::drop_while_view
    {
        data, [](int x) { return x <= 0; }
    };
 
    std::cout << std::boolalpha;
    for (int x : data)
        std::cout << "predicate(" << std::setw(2) << x << ") : "
                  << view.pred()(x) << '\n';
}
```
