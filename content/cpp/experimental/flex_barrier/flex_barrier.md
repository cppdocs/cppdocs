---
title: "std::experimental::flex_barrier::flex_barrier"
source_path: "cpp/experimental/flex_barrier/flex_barrier"
category: "experimental"
---

1) Has the same effect as flex_barrier(num_threads, c), where c is a [Callable](/cpp/named_req/callable/) object whose invocation returns -1 and has no side effects.

## Declarations
```cpp
explicit flex_barrier( std::ptrdiff_t num_threads );
```
_(concurrency TS)_

```cpp
template< class F >
flex_barrier( std::ptrdiff_t num_threads, F completion );
```
_(concurrency TS)_

```cpp
flex_barrier( const flex_barrier & ) = delete;
```
_(concurrency TS)_

## Parameters
- `num_threads`: the number of participating threads for the flex_barrier; must be non-negative
- `completion`: a function object controlling the completion phase; must be Callable with no arguments and return type std::ptrdiff_t, and when invoked, must return a value no less than -1 and must not throw an exception

## Notes
If num_threads is zero, the set of participating threads is empty, and flex_barrier can only be destroyed.
