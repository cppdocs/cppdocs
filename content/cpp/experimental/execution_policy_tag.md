---
title: "std::experimental::parallel::seq, std::experimental::parallel::par, std::experimental::parallel::par_vec"
source_path: "cpp/experimental/execution_policy_tag"
header: "<experimental/execution_policy>"
category: "experimental"
---

seq, par and par_vec are instances of the execution policy types sequential_execution_policy, parallel_execution_policy and parallel_vector_execution_policy respectively. They are used to specify the execution policy of parallel algorithms - i.e., the kinds of parallelism allowed.

## Declarations
```cpp
constexpr sequential_execution_policy seq{};
```
_(parallelism TS)_

```cpp
constexpr parallel_execution_policy par{};
```
_(parallelism TS)_

```cpp
constexpr parallel_vector_execution_policy par_vec{};
```
_(parallelism TS)_
