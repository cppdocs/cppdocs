---
title: "std::atomic<T>::operator T"
source_path: "cpp/atomic/atomic/operator"
category: "atomic"
since: "C++11"
---

Atomically loads and returns the current value of the atomic variable. Equivalent to load().

## Declarations
```cpp
operator T() const noexcept;
```
_(since C++11)_

```cpp
operator T() const volatile noexcept;
```
_(since C++11)_

## Return value
The current value of the atomic variable.

## See also
- [load](/cpp/atomic/atomic/load/)
