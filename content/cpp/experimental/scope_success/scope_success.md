---
title: "std::experimental::scope_success<EF>::scope_success"
source_path: "cpp/experimental/scope_success/scope_success"
category: "experimental"
---

Creates a scope_success from a function, a function object or another scope_success.

## Declarations
```cpp
template< class Fn >
explicit scope_success( Fn&& fn ) noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

```cpp
scope_success( scope_success&& other ) noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

```cpp
scope_success( const scope_success& ) = delete;
```
_(library fundamentals TS v3)_

## Parameters
- `fn`: function or function object used for initializing the stored EF
- `other`: scope_success to move from

## Example
This section is incompleteReason: no example

## See also
- [uncaught_exceptionuncaught_exceptions](/cpp/error/exception/uncaught_exception/)
- [release](/cpp/experimental/scope_success/release/)
