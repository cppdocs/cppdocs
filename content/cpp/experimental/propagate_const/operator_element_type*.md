---
title: "std::experimental::propagate_const<T>::operator element_type*, std::experimental::propagate_const<T>::operator const element_type*"
source_path: "cpp/experimental/propagate_const/operator"
category: "experimental"
---

Provides implicit conversions to element_type* and const element_type*.

## Declarations
```cpp
constexpr operator element_type*();
```
_(library fundamentals TS v2)_

```cpp
constexpr operator const element_type*() const;
```
_(library fundamentals TS v2)_

## Return value
A pointer to the object pointed to by the wrapped pointer-like object, i.e., this->get().

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/propagate_const/get/)
