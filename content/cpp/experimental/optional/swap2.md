---
title: "std::experimental::swap(std::experimental::optional)"
source_path: "cpp/experimental/optional/swap2"
header: "<experimental/optional>"
category: "experimental"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::experimental::optional](/cpp/experimental/optional/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class T >
void swap( optional<T>& lhs, optional<T>& rhs ) noexcept(/* see below */);
```
_(library fundamentals TS)_

## Parameters
- `lhs, rhs`: optional objects whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/experimental/optional/swap/)
