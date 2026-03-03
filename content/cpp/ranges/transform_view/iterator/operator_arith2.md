---
title: "operator+,-(ranges::transform_view::iterator)"
source_path: "cpp/ranges/transform_view/iterator/operator"
category: "ranges"
since: "C++20"
---

1,2) Returns the iterator i incremented by n.

## Declarations
```cpp
friend constexpr /*iterator*/ operator+( /*iterator*/ i, difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
friend constexpr /*iterator*/ operator+( difference_type n, /*iterator*/ i )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
friend constexpr /*iterator*/ operator-( /*iterator*/ i, difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++20)_

```cpp
friend constexpr difference_type operator-( const /*iterator*/& x,
const /*iterator*/& y )
requires std::sized_sentinel_for<ranges::iterator_t<Base>,
ranges::iterator_t<Base>>;
```
_(since C++20)_

## Parameters
- `i, x, y`: the iterators.
- `n`: position relative to current location.

## Return value
Let parent_ denote the pointer to the parent transform_view, current_ denote the underlying iterator.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3483 | C++20 | transform_view::iterator's difference is overconstrained | requirement is relaxed |
