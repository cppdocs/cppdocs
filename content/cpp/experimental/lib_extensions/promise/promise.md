---
title: "std::experimental::promise<R>::promise (library fundamentals TS)"
source_path: "cpp/experimental/lib_extensions/promise/promise"
category: "experimental"
---

Constructs a std::experimental::promise object.

## Declarations
```cpp
promise();
```
_(library fundamentals TS)_

```cpp
template< class Alloc >
promise( std::allocator_arg_t, const Alloc& alloc );
```
_(library fundamentals TS)_

```cpp
promise( promise&& other ) noexcept;
```
_(library fundamentals TS)_

```cpp
promise( const promise& other ) = delete;
```
_(library fundamentals TS)_

## Parameters
- `alloc`: allocator to use to allocate the shared state
- `other`: another std::experimental::promise to acquire the state from
