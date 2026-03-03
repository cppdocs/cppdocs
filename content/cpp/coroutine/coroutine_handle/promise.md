---
title: "std::coroutine_handle<Promise>::promise"
source_path: "cpp/coroutine/coroutine_handle/promise"
category: "coroutine"
since: "C++20"
---

Obtains a reference to the promise object.

## Declarations
```cpp
Member of the primary template
```

```cpp
Promise& promise() const;
```
_(since C++20)_

```cpp
Member of specialization std::coroutine_handle<std::noop_coroutine_promise>
```

```cpp
std::noop_coroutine_promise& promise() const noexcept;
```
_(since C++20)_

## Return value
A reference to the promise object.

## Notes
The promise object of a no-op coroutine is not destroyed as long as there is some [std::noop_coroutine_handle](/cpp/coroutine/coroutine_handle/) referring to the coroutine.

## See also
- [from_promise](/cpp/coroutine/coroutine_handle/from_promise/)
