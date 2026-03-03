---
title: "std::execution::schedule, std::execution::schedule_result_t"
source_path: "cpp/execution/schedule"
header: "<execution>"
category: "execution"
since: "C++26"
---

Obtains a sender describing the start of a task graph on the provided scheduler.

## Declarations
```cpp
struct schedule_t { /*unspecified*/ };
```
_(since C++26)_

```cpp
inline constexpr schedule_t schedule{};
```
_(since C++26) (customization point object)_

```cpp
Call signature
```

```cpp
execution::sender auto schedule( execution::scheduler auto sch );
```
_(since C++26)_

```cpp
Helper result types
```

```cpp
template< execution::scheduler Sch >
using schedule_result_t = decltype(schedule(std::declval<Sch>()));
```
_(since C++26)_

## Example
This section is incompleteReason: no example
