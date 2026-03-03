---
title: "std::ranges::view_interface<D>::operator bool"
source_path: "cpp/ranges/view_interface/operator_bool"
category: "ranges"
since: "C++20"
---

The default implementation of operator bool member function checks whether the view is non-empty. It makes the derived type [contextually convertible to bool](/cpp/language/implicit_cast/#Contextual_conversions).

## Declarations
```cpp
constexpr explicit operator bool() requires /* see below */;
```
_(since C++20)_

```cpp
constexpr explicit operator bool() const requires /* see below */;
```
_(since C++20)_

## Return value
false if the value of the derived type is empty (determined by [std::ranges::empty](/cpp/ranges/empty/)), true otherwise.

## Notes
In C++20, no type derived from [std::ranges::view_interface](/cpp/ranges/view_interface/) in the standard library provides their own operator bool. Almost all of these types use the default implementation.

A notable exception is [std::ranges::basic_istream_view](/cpp/ranges/basic_istream_view/). For its iterator type never satisfies [forward_iterator](/cpp/iterator/forward_iterator/), the view cannot use the inherited operator bool.

## Example
```cpp
#include <array>
#include <iostream>
#include <ranges>
 
int main()
{
    const std::array ints {0, 1, 2, 3, 4};
    auto odds = ints | std::views::filter([](int i) { return 0 != i % 2; });
    auto negs = ints | std::views::filter([](int i) { return i < 0; });
    std::cout << std::boolalpha
              << "Has odd numbers: " << (!!odds) << ' ' << '\n'
              << "Has negative numbers: " << (!!negs) << ' ' << '\n';
}
```

## See also
- [ranges::empty](/cpp/ranges/empty/)
- [empty](/cpp/ranges/view_interface/empty/)
- [sized_range](/cpp/ranges/sized_range/)
- [forward_range](/cpp/ranges/forward_range/)
- [empty](/cpp/iterator/empty/)
