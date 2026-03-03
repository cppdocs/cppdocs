---
title: "std::experimental::invocation_type, std::experimental::raw_invocation_type"
source_path: "cpp/experimental/invocation_type"
header: "<experimental/type_traits>"
category: "experimental"
---

Computes the invocation parameters when Fn is called with the arguments ArgTypes..., as in INVOKE([std::declval](/cpp/utility/declval/)<Fn>(), [std::declval](/cpp/utility/declval/)<ArgTypes>()...), where INVOKE is the operation defined in [Callable](/cpp/named_req/callable/).

## Declarations
```cpp
template< class >
struct raw_invocation_type; //undefined
template< class Fn, class... ArgTypes >
struct raw_invocation_type<Fn(ArgTypes...)>;
```
_(library fundamentals TS)_

```cpp
template< class >
struct invocation_type; //undefined
template< class Fn, class... ArgTypes >
struct invocation_type<Fn(ArgTypes...)>;
```
_(library fundamentals TS)_

## Example
This section is incompleteReason: no example

## See also
- [C++ documentation](/cpp/experimental/reflect/)
