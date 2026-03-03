---
title: "std::allocator<T>::max_size"
source_path: "cpp/memory/allocator/max_size"
category: "memory"
---

Returns the maximum theoretically possible value of n, for which the call [allocate](/cpp/memory/allocator/allocate/)(n, 0) could succeed.

## Declarations
```cpp
size_type max_size() const throw();
```
_(until C++11)_

```cpp
size_type max_size() const noexcept;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Return value
The maximum supported allocation size.

## See also
- [max_size](/cpp/memory/allocator_traits/max_size/)
