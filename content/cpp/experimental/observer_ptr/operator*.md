---
title: "std::experimental::observer_ptr<W>::operator*, std::experimental::observer_ptr<W>::operator->"
source_path: "cpp/experimental/observer_ptr/operator"
category: "experimental"
---

operator* and operator-> provide access to the object watched by *this.

## Declarations
```cpp
constexpr std::add_lvalue_reference_t<element_type> operator*() const;
```
_(library fundamentals TS v2)_

```cpp
constexpr element_type* operator->() const noexcept;
```
_(library fundamentals TS v2)_

## Return value
1) Returns the object watched by *this, equivalent to *get().

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/observer_ptr/get/)
