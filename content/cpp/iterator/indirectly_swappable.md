---
title: "std::indirectly_swappable"
source_path: "cpp/iterator/indirectly_swappable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept indirectly_swappable specifies a relationship between two types respectively modelling [std::indirectly_readable](/cpp/iterator/indirectly_readable/), where their referenced types can be swapped.

## Declarations
```cpp
template< class I1, class I2 = I1 >
concept indirectly_swappable =
std::indirectly_readable<I1> &&
std::indirectly_readable<I2> &&
requires( const I1 i1, const I2 i2 )
{
ranges::iter_swap(i1, i1);
ranges::iter_swap(i1, i2);
ranges::iter_swap(i2, i1);
ranges::iter_swap(i2, i2);
};
```
_(since C++20)_

## See also
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [iter_swap](/cpp/iterator/ranges/iter_swap/)
