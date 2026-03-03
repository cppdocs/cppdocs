---
title: "std::shared_lock<Mutex>::operator="
source_path: "cpp/thread/shared_lock/operator"
category: "thread"
since: "C++14"
---

Move assignment operator. Replaces the contents with those of other using move semantics.

## Declarations
```cpp
shared_lock& operator=( shared_lock&& other ) noexcept;
```
_(since C++14)_

## Parameters
- `other`: another shared_lock to replace the state with

## Return value
*this
