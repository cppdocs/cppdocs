---
title: "std::shared_lock<Mutex>::swap"
source_path: "cpp/thread/shared_lock/swap"
category: "thread"
since: "C++14"
---

Exchanges the internal states of the lock objects.

## Declarations
```cpp
template< class Mutex >
void swap( shared_lock<Mutex>& other ) noexcept;
```
_(since C++14)_

## Parameters
- `other`: the lock to swap the state with

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [std::swap(std::shared_lock)](/cpp/thread/shared_lock/swap2/)
- [std::swap](/cpp/utility/swap/)
