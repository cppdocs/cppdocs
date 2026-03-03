---
title: "std::pointer_to_unary_function"
source_path: "cpp/utility/functional/pointer_to_unary_function"
category: "utility"
---

std::pointer_to_unary_function is a function object that acts as a wrapper around a unary function.

## Declarations
```cpp
template<
class Arg,
class Result
> class pointer_to_unary_function : public std::unary_function<Arg, Result>;
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `f`: pointer to a function to store

## Return value
The value returned by the called function.

## See also
- [pointer_to_binary_function](/cpp/utility/functional/pointer_to_binary_function/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
