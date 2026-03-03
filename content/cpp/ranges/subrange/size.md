---
title: "std::ranges::subrange<I,S,K>::size"
source_path: "cpp/ranges/subrange/size"
category: "ranges"
since: "C++20"
---

Obtains the number of elements in the [subrange](/cpp/ranges/subrange/):

## Declarations
```cpp
constexpr /*make-unsigned-like-t*/<std::iter_difference_t<I>> size() const
requires (K == ranges::subrange_kind::sized);
```
_(since C++20)_

## Return value
As described above.

## Example
```cpp
#include <functional>
#include <iostream>
#include <ranges>
#include <utility>
 
int main()
{
    const auto v = {2, 2, 2, 7, 1, 1, 1, 1, 8, 2, 2, 2, 2, 2};
 
    // the value type of views::chunk_by is the ranges::subrange
 
    auto to_pair = [](auto sub) { return std::make_pair(sub[0], sub.size()); };
                                                                 /* ^^^^ */
    auto pairs = v | std::views::chunk_by(std::equal_to{})
                   | std::views::transform(to_pair);
 
    for (auto x : pairs bitor std::views::keys)
        std::cout << x << ' ';
    std::cout << '\n';
    for (auto x : pairs bitor std::views::values)
        std::cout << x << ' ';
    std::cout << '\n';
}
```

## See also
- [empty](/cpp/ranges/subrange/empty/)
- [sizessize](/cpp/iterator/size/)
- [ranges::size](/cpp/ranges/size/)
