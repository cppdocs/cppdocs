---
title: "std::experimental::unique_resource<R, D>::operator*, std::experimental::unique_resource<R, D>::operator->"
source_path: "cpp/experimental/unique_resource/operator"
category: "experimental"
---

1) Access the object or function pointed by the underlying resource handle which is a pointer. This function participates in overload resolution only if [std::is_pointer_v](/cpp/types/is_pointer/)<R> is true and [std::is_void_v](/cpp/types/is_void/)<[std::remove_pointer_t](/cpp/types/remove_pointer/)<R>> is false. If the resource handle is not pointing to an object or a function, the behavior is undefined.

## Declarations
```cpp
std::add_lvalue_reference_t<std::remove_pointer_t<R>>
operator*() const noexcept;
```
_(library fundamentals TS v3)_

```cpp
R operator->() const noexcept;
```
_(library fundamentals TS v3)_

## Example
This section is incompleteReason: no example

## See also
- [get](/cpp/experimental/unique_resource/get/)
- [operator*operator->](/cpp/memory/unique_ptr/operator/)
