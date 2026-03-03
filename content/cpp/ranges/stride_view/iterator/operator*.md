---
title: "std::ranges::stride_view<V>::iterator<Const>::operator*"
source_path: "cpp/ranges/stride_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Returns the elements into V the underlying iterator [current_](/cpp/ranges/stride_view/iterator/#Data_members) points to.

## Declarations
```cpp
constexpr decltype(auto) operator*() const;
```
_(since C++23)_

## Return value
The current element.

## Notes
operator-> is not provided.

## Example
```cpp
#include <ranges>
 
int main()
{
    constexpr static auto v = {'a', 'b', 'c', 'd', 'e'};
    constexpr auto view{v | std::views::stride(2)};
    constexpr auto iter{view.begin() + 1};
    static_assert(*iter == 'c');
    static_assert(*(view.begin() + 2) == 'e');
}
```

## See also
- [operator[]](/cpp/ranges/stride_view/iterator/operator_at/)
