---
title: "std::experimental::make_ready_future"
source_path: "cpp/experimental/make_ready_future"
header: "<experimental/future>"
category: "experimental"
---

1) If [std::decay_t](/cpp/types/decay/)<T> is [std::reference_wrapper](/cpp/utility/functional/reference_wrapper/)<X>, then the type V is X&, otherwise, V is [std::decay_t](/cpp/types/decay/)<T>.

## Declarations
```cpp
template< class T >
future<V /* see below */> make_ready_future( T&& value );
```
_(concurrency TS)_

```cpp
future<void> make_ready_future();
```
_(concurrency TS)_

## Return value
A std::experimental::future associated with the shared state that is created.

## See also
- [make_exceptional_future](/cpp/experimental/make_exceptional_future/)
