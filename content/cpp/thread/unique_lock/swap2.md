---
title: "std::swap(std::unique_lock)"
source_path: "cpp/thread/unique_lock/swap2"
category: "thread"
since: "C++11"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::unique_lock](/cpp/thread/unique_lock/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class Mutex >
void swap( unique_lock<Mutex>& lhs,
unique_lock<Mutex>& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `lhs, rhs`: lock wrappers whose states to swap

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/thread/unique_lock/swap/)
- [std::unique_lock](/cpp/thread/unique_lock/)
