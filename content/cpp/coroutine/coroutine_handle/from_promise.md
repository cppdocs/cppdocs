---
title: "std::coroutine_handle<Promise>::from_promise"
source_path: "cpp/coroutine/coroutine_handle/from_promise"
category: "coroutine"
since: "C++20"
---

Creates a coroutine_handle from the promise object of a coroutine. The created coroutine_handle refers the coroutine, and [promise()](/cpp/coroutine/coroutine_handle/promise/) returns a reference to p.

## Declarations
```cpp
static coroutine_handle from_promise( Promise& p );
```
_(since C++20)_

## Parameters
- `p`: promise object of a coroutine to refer

## Return value
A coroutine_handle referring the given coroutine.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/coroutine/coroutine_handle/coroutine_handle/)
- [from_address](/cpp/coroutine/coroutine_handle/from_address/)
- [noop_coroutine](/cpp/coroutine/noop_coroutine/)
