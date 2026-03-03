---
title: "operator+,-(ranges::adjacent_transform_view::iterator)"
source_path: "cpp/ranges/adjacent_transform_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Let [parent_](/cpp/ranges/adjacent_transform_view/iterator/#Data_members) and [inner_](/cpp/ranges/adjacent_transform_view/iterator/#Data_members) be the data members of the [iterator](/cpp/ranges/adjacent_transform_view/iterator/).

## Declarations
```cpp
friend constexpr /*iterator*/ operator+( const /*iterator*/& i, difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr /*iterator*/ operator+( difference_type n, const /*iterator*/& i )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr iterator operator-( const /*iterator*/& i, difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
friend constexpr difference_type operator-( const /*iterator*/& i,
const /*iterator*/& j )
requires std::sized_sentinel_for</*inner-iterator*/<Const>,
/*inner-iterator*/<Const>>;
```
_(since C++23)_

## Parameters
- `i, j`: the iterators
- `n`: a position relative to current location

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/adjacent_transform_view/iterator/operator_arith/)
