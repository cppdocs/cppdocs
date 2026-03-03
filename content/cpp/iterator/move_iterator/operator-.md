---
title: "operator-(std::move_iterator)"
source_path: "cpp/iterator/move_iterator/operator"
header: "<iterator>"
category: "iterator"
---

Returns the distance between two iterator adaptors.

## Declarations
```cpp
template< class Iter1, class Iter2 >
auto operator-( const move_iterator<Iter1>& lhs,
const move_iterator<Iter2>& rhs )
-> decltype(lhs.base() - rhs.base());
```
_(since C++11) (constexpr since C++17)_

## Parameters
- `lhs, rhs`: iterator adaptors to compute the difference of

## Return value
lhs.base() - rhs.base()

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator+=operator+operator--operator--(int)operator-=operator-](/cpp/iterator/move_iterator/operator_arith/)
- [operator+]()
