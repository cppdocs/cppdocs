---
title: "std::coroutine_handle<Promise>::operator coroutine_handle<>"
source_path: "cpp/coroutine/coroutine_handle/operator"
category: "coroutine"
since: "C++20"
---

This conversion function converts a [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<Promise> value to a [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<> holding the same underlying address. It effectively erases the promise type.

## Declarations
```cpp
constexpr operator coroutine_handle<>() const noexcept;
```
_(since C++20)_

## Return value
[std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<>::from_address(address())

## See also
- [operator==operator<=>](/cpp/coroutine/coroutine_handle/operator_cmp/)
