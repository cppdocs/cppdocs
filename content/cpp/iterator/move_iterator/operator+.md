---
title: "operator+(std::move_iterator)"
source_path: "cpp/iterator/move_iterator/operator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Returns the iterator it incremented by n.

## Declarations
```cpp
template< class Iter >
move_iterator<Iter> operator+
( typename move_iterator<Iter>::difference_type n,
const move_iterator<Iter>& it );
```
_(since C++11) (constexpr since C++17) (until C++20)_

```cpp
template< class Iter >
constexpr move_iterator<Iter> operator+
( std::iter_difference_t<Iter> n, const move_iterator<Iter>& it );
```
_(since C++20)_

## Parameters
- `n`: the number of positions to increment the iterator
- `it`: the iterator adaptor to increment

## Return value
it + n

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3293 | C++20 | the non-member operator+ was constrained torequire it + n is well-formed and has type Iter | changed toit.base() + n |

## See also
- [operator++operator++(int)operator+=operator+operator--operator--(int)operator-=operator-](/cpp/iterator/move_iterator/operator_arith/)
- [operator-]()
