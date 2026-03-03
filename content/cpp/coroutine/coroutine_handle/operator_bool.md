---
title: "std::coroutine_handle<Promise>::operator bool"
source_path: "cpp/coroutine/coroutine_handle/operator_bool"
category: "coroutine"
since: "C++20"
---

Checks whether *this is non-null, i.e. the value of *this is obtained from the promise object of some coroutine. Equivalent to return bool(address());.

## Declarations
```cpp
constexpr explicit operator bool() const noexcept;
```
_(since C++20)_

## Return value
bool(address()), or true if Promise is [std::noop_coroutine_promise](/cpp/coroutine/noop_coroutine_promise/).

## See also
- [address](/cpp/coroutine/coroutine_handle/address/)
