---
title: "std::experimental::observer_ptr<W>::operator element_type*"
source_path: "cpp/experimental/observer_ptr/operator"
category: "experimental"
---

Provides an explicit conversion to the type of the stored pointer.

## Declarations
```cpp
constexpr explicit operator element_type*() const noexcept;
```
_(library fundamentals TS v2)_

## Return value
A pointer to the watched object, i.e., get().

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/observer_ptr/get/)
