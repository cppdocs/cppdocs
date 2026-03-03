---
title: "std::experimental::when_all"
source_path: "cpp/experimental/when_all"
header: "<experimental/future>"
category: "experimental"
---

Create a future object that becomes ready when all of the input futures and shared_futures become ready. The behavior is undefined if any input future or shared_future is invalid.

## Declarations
```cpp
template< class InputIt >
auto when_all( InputIt first, InputIt last )
-> future<std::vector<typename std::iterator_traits<InputIt>::value_type>>;
```
_(concurrency TS)_

```cpp
template< class... Futures >
auto when_all( Futures&&... futures )
-> future<std::tuple<std::decay_t<Futures>...>>;
```
_(concurrency TS)_

## Return value
A future referring to the shared state created by the call. The future is always valid(), and it becomes ready when all of the input futures and shared_futures the call are ready.
