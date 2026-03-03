---
title: "std::coroutine_handle<Promise>::destroy"
source_path: "cpp/coroutine/coroutine_handle/destroy"
category: "coroutine"
since: "C++20"
---

1) Destroys the coroutine state of the coroutine to which *this refers, or does nothing if the coroutine is a no-op coroutine.

## Declarations
```cpp
Member of other specializations
```

```cpp
void destroy() const;
```
_(since C++20)_

```cpp
Member of specialization std::coroutine_handle<std::noop_coroutine_promise>
```

```cpp
constexpr void destroy() const noexcept;
```
_(since C++20)_

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [operator()resume](/cpp/coroutine/coroutine_handle/resume/)
