---
title: "std::coroutine_handle<Promise>::operator="
source_path: "cpp/coroutine/coroutine_handle/operator"
category: "coroutine"
since: "C++20"
---

Replaces the underlying address.

## Declarations
```cpp
coroutine_handle& operator=( std::nullptr_t ) noexcept;
```
_(since C++20)_

```cpp
coroutine_handle& operator=( const coroutine_handle& other ) = default;
```
_(since C++20)_

```cpp
coroutine_handle& operator=( coroutine_handle&& other ) = default;
```
_(since C++20)_

## Parameters
- `other`: another coroutine_handle to assign from

## Return value
*this
