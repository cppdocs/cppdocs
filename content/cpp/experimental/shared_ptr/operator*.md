---
title: "std::experimental::shared_ptr<T>::operator*, std::experimental::shared_ptr<T>::operator->"
source_path: "cpp/experimental/shared_ptr/operator"
category: "experimental"
---

Dereferences the stored pointer. The behavior is undefined if the stored pointer is null.

## Declarations
```cpp
T& operator*() const noexcept;
```
_(library fundamentals TS)_

```cpp
T* operator->() const noexcept;
```
_(library fundamentals TS)_

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/shared_ptr/get/)
