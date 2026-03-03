---
title: "std::experimental::scope_fail<EF>::scope_fail"
source_path: "cpp/experimental/scope_fail/scope_fail"
category: "experimental"
---

Creates a scope_fail from a function, a function object or another scope_fail.

## Declarations
```cpp
template< class Fn >
explicit scope_fail( Fn&& fn ) noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

```cpp
scope_fail( scope_fail&& other ) noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

```cpp
scope_fail( const scope_fail& ) = delete;
```
_(library fundamentals TS v3)_

## Parameters
- `fn`: function or function object used for initializing the stored EF
- `other`: scope_fail to move from

## Example
This section is incompleteReason: no example

## See also
- [uncaught_exceptionuncaught_exceptions](/cpp/error/exception/uncaught_exception/)
- [release](/cpp/experimental/scope_fail/release/)
