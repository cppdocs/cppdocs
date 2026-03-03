---
title: "std::coroutine_handle<Promise>::operator(), std::coroutine_handle<Promise>::resume"
source_path: "cpp/coroutine/coroutine_handle/resume"
category: "coroutine"
since: "C++20"
---

1) Resumes the execution of the coroutine to which *this refers, or does nothing if the coroutine is a no-op coroutine.

## Declarations
```cpp
Member of other specializations
```

```cpp
void operator()() const;
void resume() const;
```
_(since C++20)_

```cpp
Member of specialization std::coroutine_handle<std::noop_coroutine_promise>
```

```cpp
constexpr void operator()() const noexcept;
constexpr void resume() const noexcept;
```
_(since C++20)_

## Return value
(none)

## Notes
A coroutine that is resumed on a different execution agent should avoid relying on consistent thread identity throughout, such as holding a mutex object across a suspend point.

## Example
This section is incompleteReason: no example

## See also
- [destroy](/cpp/coroutine/coroutine_handle/destroy/)
