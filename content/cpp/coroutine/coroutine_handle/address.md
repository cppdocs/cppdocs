---
title: "std::coroutine_handle<Promise>::address"
source_path: "cpp/coroutine/coroutine_handle/address"
category: "coroutine"
since: "C++20"
---

Returns the underlying address of the coroutine_handle. The return value is non-null if and only if the current value of the coroutine_handle is obtained from a promise object of a coroutine.

## Declarations
```cpp
constexpr void* address() const noexcept;
```
_(since C++20)_

## Return value
The underlying address.

## Notes
The return value is non-null for specialization [std::noop_coroutine_handle](/cpp/coroutine/coroutine_handle/), because a std::noop_coroutine_handle cannot be created without referring to a no-op coroutine.

## See also
- [from_address](/cpp/coroutine/coroutine_handle/from_address/)
