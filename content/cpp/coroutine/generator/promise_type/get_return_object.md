---
title: "std::generator<Ref,V,Allocator>::promise_type::get_return_object"
source_path: "cpp/coroutine/generator/promise_type/get_return_object"
category: "coroutine"
since: "C++23"
---

Returns a [generator](/cpp/coroutine/generator/) object whose member [coroutine_](/cpp/coroutine/generator/#Data_members) is obtained via the expression [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)<promise_type>::from_promise(*this),
and whose member [active_](/cpp/coroutine/generator/#Data_members) points to an empty stack.

## Declarations
```cpp
std::generator get_return_object() noexcept;
```
_(since C++23)_

## Return value
The [generator](/cpp/coroutine/generator/) object.
