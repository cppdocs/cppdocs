---
title: "std::reference_wrapper<T>::operator="
source_path: "cpp/utility/functional/reference_wrapper/operator"
category: "utility"
---

Copy assignment operator. Drops the current reference and stores a reference to other.get().

## Declarations
```cpp
reference_wrapper& operator=( const reference_wrapper& other ) noexcept;
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `other`: reference wrapper to copy

## Return value
*this
