---
title: "std::suspend_always"
source_path: "cpp/coroutine/suspend_always"
header: "<coroutine>"
category: "coroutine"
since: "C++20"
---

suspend_always is an empty class which can be used to indicate that an [await expression](/cpp/language/coroutines/#co_await) always suspends and does not produce a value.

## Declarations
```cpp
struct suspend_always;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [suspend_never](/cpp/coroutine/suspend_never/)
