---
title: "operator==(std::move_iterator<Iter>, std::move_sentinel)"
source_path: "cpp/iterator/move_iterator/operator"
category: "iterator"
since: "C++20"
---

Compares a move_iterator and a move_sentinel.

## Declarations
```cpp
template< std::sentinel_for<Iter> S >
friend constexpr bool
operator==( const move_iterator& i, const std::move_sentinel<S>& s );
```
_(since C++20)_

## Parameters
- `i`: the move iterator to compare
- `s`: the move sentinel to compare

## Return value
i.base() == s.base()

## Example
This section is incompleteReason: no example

## See also
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/iterator/move_iterator/operator_cmp/)
