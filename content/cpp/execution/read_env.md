---
title: "std::execution::read_env"
source_path: "cpp/execution/read_env"
header: "<execution>"
category: "execution"
since: "C++26"
---

A sender factory that returns a sender that reaches into a receiver’s environment and pulls out the current value associated with a given [query object](/cpp/experimental/execution/#Queries).

## Declarations
```cpp
inline constexpr /*unspecified*/ read_env{};
```
_(since C++26) (customization point object)_

```cpp
Call signature
```

```cpp
execution::sender auto read_env( auto&& query );
```
_(since C++26)_

## Example
```cpp
std::execution::sender auto task =
  std::execution::read_env(std::execution::get_scheduler)
    | std::execution::let_value([](auto sched) {
        return std::execution::starts_on(sched, /*some nested work here*/);
    });
 
std::this_thread::sync_wait( std::move(task) ); // wait for it to finish
```
