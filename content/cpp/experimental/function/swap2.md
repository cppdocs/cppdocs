---
title: "std::experimental::swap(std::experimental::function)"
source_path: "cpp/experimental/function/swap2"
category: "experimental"
---

Overloads the swap algorithm for std::experimental::function. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class R, class... Args >
void swap( std::experimental::function<R(Args...)> &lhs,
std::experimental::function<R(Args...)> &rhs );
```

## Parameters
- `lhs, rhs`: polymorphic function wrappers whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/experimental/function/swap/)
