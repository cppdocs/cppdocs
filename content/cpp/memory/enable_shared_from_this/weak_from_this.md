---
title: "std::enable_shared_from_this<T>::weak_from_this"
source_path: "cpp/memory/enable_shared_from_this/weak_from_this"
category: "memory"
since: "C++17"
---

Returns a [std::weak_ptr](/cpp/memory/weak_ptr/)<T> that tracks ownership of *this by all existing [std::shared_ptr](/cpp/memory/shared_ptr/) that refer to *this.

## Declarations
```cpp
std::weak_ptr<T> weak_from_this() noexcept;
```
_(since C++17)_

```cpp
std::weak_ptr<T const> weak_from_this() const noexcept;
```
_(since C++17)_

## Return value
[weak_this](/cpp/memory/enable_shared_from_this/#weak_this)

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_enable_shared_from_this
201603L
(C++17)
std::enable_shared_from_this::weak_from_this

## Example
This section is incompleteReason: no example

## See also
- [shared_ptr](/cpp/memory/shared_ptr/)
