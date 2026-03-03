---
title: "std::auto_ptr<T>::operator*, std::auto_ptr<T>::operator->"
source_path: "cpp/memory/auto_ptr/operator"
category: "memory"
---

Dereferences a pointer to the managed object. The first version requires get() != 0.

## Declarations
```cpp
T& operator*() const throw();
```
_(deprecated in C++11) (removed in C++17)_

```cpp
T* operator->() const throw();
```
_(deprecated in C++11) (removed in C++17)_

## See also
- [get](/cpp/memory/auto_ptr/get/)
