---
title: "operator-(std::move_iterator<Iter>, std::move_sentinel)"
source_path: "cpp/iterator/move_iterator/operator"
category: "iterator"
since: "C++20"
---

Returns the distance between a move_iterator and a move_sentinel.

## Declarations
```cpp
template< std::sized_sentinel_for<Iter> S >
friend constexpr std::iter_difference_t<Iter>
operator-( const std::move_sentinel<S>& s, const move_iterator& i );
```
_(since C++20)_

```cpp
template< std::sized_sentinel_for<Iter> S >
friend constexpr std::iter_difference_t<Iter>
operator-( const move_iterator& i, const std::move_sentinel<S>& s );
```
_(since C++20)_

## Parameters
- `i`: std::move_iterator<Iter>
- `s`: std::move_sentinel<S>, where S models std::sized_sentinel_for<Iter>

## Example
This section is incompleteReason: no example

## See also
- [operator-]()
