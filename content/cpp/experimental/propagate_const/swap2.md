---
title: "std::experimental::swap(std::experimental::propagate_const)"
source_path: "cpp/experimental/propagate_const/swap2"
category: "experimental"
---

Specializes the swap algorithm for [std::experimental::propagate_const](/cpp/experimental/propagate_const/). Swaps the pointers of lhs and rhs. Equivalent to lhs.swap(rhs).

## Declarations
```cpp
template< class T >
constexpr void swap( std::experimental::propagate_const<T>& lhs,
std::experimental::propagate_const<T>& rhs ) noexcept(/* see below */);
```
_(library fundamentals TS v2)_

## Parameters
- `lhs, rhs`: propagate_consts whose contents to swap

## Return value
(none)

## See also
- [swap](/cpp/utility/swap/)
- [swap](/cpp/experimental/propagate_const/swap/)
