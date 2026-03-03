---
title: "std::experimental::scope_exit<EF>::scope_exit"
source_path: "cpp/experimental/scope_exit/scope_exit"
category: "experimental"
---

Creates a scope_exit from a function, a function object or another scope_exit.

## Declarations
```cpp
template< class Fn >
explicit scope_exit( Fn&& fn ) noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

```cpp
scope_exit( scope_exit&& other ) noexcept(/*see below*/);
```
_(library fundamentals TS v3)_

```cpp
scope_exit( const scope_exit& ) = delete;
```
_(library fundamentals TS v3)_

## Parameters
- `fn`: function or function object used for initializing the stored EF
- `other`: scope_exit to move from

## Example
This section is incompleteReason: no example

## See also
- [release](/cpp/experimental/scope_exit/release/)
