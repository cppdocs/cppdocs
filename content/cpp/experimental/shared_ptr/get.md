---
title: "std::experimental::shared_ptr<T>::get"
source_path: "cpp/experimental/shared_ptr/get"
category: "experimental"
---

Returns the stored pointer.

## Declarations
```cpp
element_type* get() const noexcept;
```
_(library fundamentals TS)_

## Return value
The stored pointer.

## Notes
A shared_ptr may share ownership of an object while storing a pointer to another object. get() returns the stored pointer, not the managed pointer.

## Example
This section is incompleteReason: no example

## See also
- [operator*operator->](/cpp/experimental/shared_ptr/operator/)
