---
title: "std::auto_ptr<T>::reset"
source_path: "cpp/memory/auto_ptr/reset"
category: "memory"
---

Replaces the held pointer by p. If the currently held pointer is not null pointer, delete get() is called.

## Declarations
```cpp
void reset( T* p = 0 ) throw();
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `p`: a pointer to an object to manage

## Return value
(none)

## See also
- [release](/cpp/memory/auto_ptr/release/)
