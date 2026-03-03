---
title: "std::coroutine_handle<Promise>::from_address"
source_path: "cpp/coroutine/coroutine_handle/from_address"
category: "coroutine"
since: "C++20"
---

Creates a coroutine_handle from a null pointer value or an underlying address of another coroutine_handle. The underlying address of return value is addr.

## Declarations
```cpp
static constexpr coroutine_handle from_address( void *addr );
```
_(since C++20)_

## Parameters
- `addr`: underlying address to import

## Return value
A [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<Promise> whose underlying address is addr.

## Notes
If addr is not a null pointer value, it must be obtained from a prior call to address() on a coroutine_handle referring to some coroutine.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/coroutine/coroutine_handle/coroutine_handle/)
- [from_promise](/cpp/coroutine/coroutine_handle/from_promise/)
- [noop_coroutine](/cpp/coroutine/noop_coroutine/)
