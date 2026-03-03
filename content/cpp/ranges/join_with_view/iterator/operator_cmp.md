---
title: "operator==(ranges::join_with_view::iterator)"
source_path: "cpp/ranges/join_with_view/iterator/operator_cmp"
category: "ranges"
since: "C++23"
---

Compares whether the iterators x and y are equal. They only compare equal if their [outer iterators](/cpp/ranges/join_with_view/iterator/) and [inner iterators](/cpp/ranges/join_with_view/iterator/) compare equal respectively.

## Declarations
```cpp
friend constexpr bool operator==( const /*iterator*/& x, const /*iterator*/& y )
requires std::is_reference_v<InnerBase> &&
std::equality_comparable<ranges::iterator_t<Base>> &&
std::equality_comparable<ranges::iterator_t<InnerBase>>;
```
_(since C++23)_

## Parameters
- `x, y`: iterators to compare

## Return value
x.[outer_it_](/cpp/ranges/join_with_view/iterator/#outer_it)== y.[outer_it_](/cpp/ranges/join_with_view/iterator/#outer_it)&& x.[inner_it_](/cpp/ranges/join_with_view/iterator/#inner_it)== y.[inner_it_](/cpp/ranges/join_with_view/iterator/#inner_it)

## See also
- [operator==](/cpp/ranges/join_with_view/sentinel/operator_cmp/)
- [join_with_view::begin](/cpp/ranges/join_with_view/begin/)
