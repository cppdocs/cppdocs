---
title: "std::coroutine_handle<Promise>::done"
source_path: "cpp/coroutine/coroutine_handle/done"
category: "coroutine"
since: "C++20"
---

Checks if a suspended coroutine is suspended at its final suspend point.

## Declarations
```cpp
Member of other specializations
```

```cpp
bool done() const;
```
_(since C++20)_

```cpp
Member of specialization std::coroutine_handle<std::noop_coroutine_promise>
```

```cpp
constexpr bool done() const noexcept;
```
_(since C++20)_

## Notes
A no-op coroutine is never considered to be suspended at its final suspend point.

A coroutine with promise object p is considered to be suspended at its final suspend point only if, let e be the result of p.final_suspend(), e.await_ready() returns false. In particular, if p.final_suspend() returns [std::suspend_never](/cpp/coroutine/suspend_never/), then done() never returns true.

## Example
This section is incompleteReason: no example
