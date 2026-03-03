---
title: "std::suspend_never"
source_path: "cpp/coroutine/suspend_never"
header: "<coroutine>"
category: "coroutine"
since: "C++20"
---

suspend_never is an empty class which can be used to indicate that an [await expression](/cpp/language/coroutines/#co_await) never suspends and does not produce a value.

## Declarations
```cpp
struct suspend_never;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [suspend_always](/cpp/coroutine/suspend_always/)
