---
title: "std::pointer_to_binary_function"
source_path: "cpp/utility/functional/pointer_to_binary_function"
category: "utility"
---

std::pointer_to_binary_function is a function object that acts as a wrapper around a binary function.

## Declarations
```cpp
template<
class Arg1,
class Arg2,
class Result
> class pointer_to_binary_function : public std::binary_function<Arg1, Arg2, Result>;
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `f`: pointer to a function to store

## Return value
The value returned by the called function.

## See also
- [pointer_to_unary_function](/cpp/utility/functional/pointer_to_unary_function/)
- [ptr_fun](/cpp/utility/functional/ptr_fun/)
