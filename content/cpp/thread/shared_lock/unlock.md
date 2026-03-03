---
title: "std::shared_lock<Mutex>::unlock"
source_path: "cpp/thread/shared_lock/unlock"
category: "thread"
since: "C++14"
---

Unlocks the associated mutex from shared mode. Effectively calls mutex()->unlock_shared().

## Declarations
```cpp
void unlock();
```
_(since C++14)_

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [lock](/cpp/thread/shared_lock/lock/)
- [release](/cpp/thread/shared_lock/release/)
