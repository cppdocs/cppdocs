---
title: "std::experimental::when_any"
source_path: "cpp/experimental/when_any"
header: "<experimental/future>"
category: "experimental"
---

Create a future object that becomes ready when at least one of the input futures and shared_futures become ready. The behavior is undefined if any input future or shared_future is invalid.

## Declarations
```cpp
template< class Sequence >
struct when_any_result {
std::size_t index;
Sequence futures;
};
```
_(concurrency TS)_

```cpp
template< class InputIt >
auto when_any( InputIt first, InputIt last )
-> future<when_any_result<std::vector<typename std::iterator_traits<InputIt>::value_type>>>;
```
_(concurrency TS)_

```cpp
template< class... Futures >
auto when_any( Futures&&... futures )
-> future<when_any_result<std::tuple<std::decay_t<Futures>...>>>;
```
_(concurrency TS)_

## Return value
A future referring to the shared state created by the call. The future is always valid(), and it becomes ready when at least one of the input futures and shared_futures the call are ready. The index member of the when_any_result contains the position of the ready future or shared_future in the futures member.
