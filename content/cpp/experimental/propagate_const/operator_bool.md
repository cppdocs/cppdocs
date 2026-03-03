---
title: "std::experimental::propagate_const<T>::operator bool"
source_path: "cpp/experimental/propagate_const/operator_bool"
category: "experimental"
---

Checks whether the wrapped pointer-like object, t_, is null.

## Declarations
```cpp
constexpr explicit operator bool() const;
```
_(library fundamentals TS v2)_

## Return value
true if the wrapped object is not null, otherwise false. Equivalent to (bool)t_.

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/propagate_const/get/)
