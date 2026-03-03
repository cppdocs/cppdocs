---
title: "std::experimental::not_fn"
source_path: "cpp/experimental/not_fn"
header: "<experimental/functional>"
category: "experimental"
---

Creates a forwarding call wrapper that returns the complement of the callable object it holds.

## Declarations
```cpp
template< class F>
/*unspecified*/ not_fn( F&& f );
```
_(library fundamentals TS v2)_

## Parameters
- `f`: the object from which the Callable object held by the wrapper is constructed

## Return value
Let FD be [std::decay_t](/cpp/types/decay/)<F> and fd be an lvalue of type FD constructed from [std::forward](/cpp/utility/forward/)<F>(f).

## Notes
not_fn is intended to replace the C++03-era negators [std::not1](/cpp/utility/functional/not1/) and [std::not2](/cpp/utility/functional/not2/).

## See also
- [not_fn](/cpp/utility/functional/not_fn/)
