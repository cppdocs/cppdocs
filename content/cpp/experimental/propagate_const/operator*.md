---
title: "std::experimental::propagate_const<T>::operator*, std::experimental::propagate_const<T>::operator->"
source_path: "cpp/experimental/propagate_const/operator"
category: "experimental"
---

Provides access to the object pointed to by the pointer-like object *this wraps.

## Declarations
```cpp
constexpr element_type& operator*();
```
_(library fundamentals TS v2)_

```cpp
constexpr const element_type& operator*() const;
```
_(library fundamentals TS v2)_

```cpp
constexpr element_type* operator->();
```
_(library fundamentals TS v2)_

```cpp
constexpr const element_type* operator->() const;
```
_(library fundamentals TS v2)_

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/propagate_const/get/)
