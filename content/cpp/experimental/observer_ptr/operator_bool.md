---
title: "std::experimental::observer_ptr<W>::operator bool"
source_path: "cpp/experimental/observer_ptr/operator_bool"
category: "experimental"
---

Checks whether *this has an associated watched object, i.e. whether get() != nullptr.

## Declarations
```cpp
constexpr explicit operator bool() const noexcept;
```
_(library fundamentals TS v2)_

## Return value
true if *this has an associated watched object, false otherwise.

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/observer_ptr/get/)
