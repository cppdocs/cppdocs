---
title: "std::coroutine_handle<Promise>::coroutine_handle"
source_path: "cpp/coroutine/coroutine_handle/coroutine_handle"
category: "coroutine"
since: "C++20"
---

Creates a coroutine_handle that does not refer a coroutine, or copies a coroutine_handle.

## Declarations
```cpp
constexpr coroutine_handle() noexcept;
```
_(since C++20)_

```cpp
constexpr coroutine_handle( std::nullptr_t ) noexcept;
```
_(since C++20)_

```cpp
coroutine_handle( const coroutine_handle& other ) = default;
```
_(since C++20)_

```cpp
coroutine_handle( coroutine_handle&& other ) = default;
```
_(since C++20)_

## Parameters
- `other`: another coroutine_handle to copy

## Notes
[std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<[std::noop_coroutine_promise](/cpp/coroutine/noop_coroutine_promise/)> is neither default constructible nor constructible from [std::nullptr_t](/cpp/types/nullptr_t/). [std::noop_coroutine](/cpp/coroutine/noop_coroutine/) can be used to create a new [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<[std::noop_coroutine_promise](/cpp/coroutine/noop_coroutine_promise/)>.

Static member functions from_promise and from_address can also create a coroutine_handle.

## See also
- [from_promise](/cpp/coroutine/coroutine_handle/from_promise/)
- [from_address](/cpp/coroutine/coroutine_handle/from_address/)
- [noop_coroutine](/cpp/coroutine/noop_coroutine/)
