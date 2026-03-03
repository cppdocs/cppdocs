---
title: "std::ranges::elements_view<V,F>::iterator<Const>::operator*"
source_path: "cpp/ranges/elements_view/iterator/operator"
category: "ranges"
since: "C++20"
---

Returns the element into V the underlying iterator points to.

## Declarations
```cpp
constexpr decltype(auto) operator*() const;
```
_(since C++20)_

## Return value
The current element.

## Notes
operator-> is not provided.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string_view>
#include <tuple>
 
int main()
{
    using T = std::tuple<int, char, std::string_view>;
 
    const auto il = {
        T{1, 'A', "α"},
        T{2, 'B', "β"},
        T{3, 'C', "γ"},
    };
 
    const auto view {il | std::views::elements<2>};
 
    const auto iter {view.begin() + 1};
 
    std::cout << *iter << '\n';
}
```

## See also
- [operator[]](/cpp/ranges/elements_view/iterator/operator_at/)
