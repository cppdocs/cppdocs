---
title: "std::swap(std::shared_lock)"
source_path: "cpp/thread/shared_lock/swap2"
category: "thread"
since: "C++14"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::shared_lock](/cpp/thread/shared_lock/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class Mutex >
void swap( shared_lock<Mutex>& lhs,
shared_lock<Mutex>& rhs ) noexcept;
```
_(since C++14)_

## Parameters
- `lhs, rhs`: lock wrappers whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/thread/shared_lock/swap/)
