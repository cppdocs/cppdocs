---
title: "std::swap(std::packaged_task)"
source_path: "cpp/thread/packaged_task/swap2"
category: "thread"
since: "C++11"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::packaged_task](/cpp/thread/packaged_task/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class Function, class... Args >
void swap( packaged_task<Function(Args...)> &lhs,
packaged_task<Function(Args...)> &rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `lhs, rhs`: packaged tasks whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/thread/packaged_task/swap/)
