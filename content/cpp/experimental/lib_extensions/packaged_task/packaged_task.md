---
title: "std::experimental::packaged_task<R(Args...)>::packaged_task (library fundamentals TS)"
source_path: "cpp/experimental/lib_extensions/packaged_task/packaged_task"
category: "experimental"
---

Constructs a new std::experimental::packaged_task object.

## Declarations
```cpp
packaged_task() noexcept;
```
_(library fundamentals TS)_

```cpp
template< class F >
explicit packaged_task( F&& f );
```
_(library fundamentals TS)_

```cpp
template< class F, class Allocator >
explicit packaged_task( std::allocator_arg_t, const Allocator& alloc, F&& f );
```
_(library fundamentals TS)_

```cpp
packaged_task( const packaged_task& ) = delete;
```
_(library fundamentals TS)_

```cpp
packaged_task( packaged_task&& rhs ) noexcept;
```
_(library fundamentals TS)_

## Parameters
- `f`: the callable target (function, member function, lambda-expression, functor) to execute
- `alloc`: the allocator to use when storing the task
- `rhs`: the std::experimental::packaged_task to move from
