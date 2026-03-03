---
title: "std::experimental::swap(std::experimental::packaged_task)"
source_path: "cpp/experimental/lib_extensions/packaged_task/swap2"
category: "experimental"
---

Overloads the swap algorithm for std::experimental::packaged_task. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class R, class... Args >
void swap( std::experimental::packaged_task<R(Args...)> &lhs,
std::experimental::packaged_task<R(Args...)> &rhs ) noexcept;
```

## Parameters
- `lhs, rhs`: packaged_tasks whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/thread/packaged_task/swap/)
