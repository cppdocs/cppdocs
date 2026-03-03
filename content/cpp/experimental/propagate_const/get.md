---
title: "std::experimental::propagate_const<T>::get"
source_path: "cpp/experimental/propagate_const/get"
category: "experimental"
---

Returns a pointer to the object pointed to by the wrapped pointer-like object, t_.

## Declarations
```cpp
constexpr element_type* get();
```
_(library fundamentals TS v2)_

```cpp
constexpr const element_type* get() const;
```
_(library fundamentals TS v2)_

## Return value
If T is an object pointer type, then t_. Otherwise, t_.get().

## Example
This section is incompleteReason: no example
