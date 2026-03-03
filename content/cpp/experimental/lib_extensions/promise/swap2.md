---
title: "std::experimental::swap(std::experimental::promise)"
source_path: "cpp/experimental/lib_extensions/promise/swap2"
category: "experimental"
---

Overloads the swap algorithm for std::experimental::promise. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class R >
void swap( std::experimental::promise<R> &lhs,
std::experimental::promise<R> &rhs ) noexcept;
```

## Parameters
- `lhs, rhs`: promises whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/thread/promise/swap/)
