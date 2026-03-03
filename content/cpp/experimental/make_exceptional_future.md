---
title: "std::experimental::make_exceptional_future"
source_path: "cpp/experimental/make_exceptional_future"
header: "<experimental/future>"
category: "experimental"
---

1) Creates a shared state of type T that is immediately ready and stores the exception pointer ex, then return a future associated with that shared state, as if by promise<T> p; p.set_exception(ex); return p.get_future();. The behavior is undefined if ex is null.

## Declarations
```cpp
template< class T >
future<T> make_exceptional_future( std::exception_ptr ex );
```
_(concurrency TS)_

```cpp
template< class T, class E >
future<T> make_exceptional_future( E ex );
```
_(concurrency TS)_

## Return value
A future object associated with the shared state that was created.

## See also
- [make_ready_future](/cpp/experimental/make_ready_future/)
