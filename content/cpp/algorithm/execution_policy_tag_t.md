---
title: "std::execution::sequenced_policy, std::execution::parallel_policy, std::execution::parallel_unsequenced_policy, std::execution::unsequenced_policy"
source_path: "cpp/algorithm/execution_policy_tag_t"
header: "<execution>"
category: "algorithm"
since: "C++17"
---

1) The execution policy type used as a unique type to disambiguate parallel algorithm overloading and require that a parallel algorithm's execution may not be parallelized. The invocations of element access functions in parallel algorithms invoked with this policy (usually specified as [std::execution::seq](/cpp/algorithm/execution_policy_tag/)) are indeterminately sequenced in the calling thread.

## Declarations
```cpp
class sequenced_policy { /* unspecified */ };
```
_(since C++17)_

```cpp
class parallel_policy { /* unspecified */ };
```
_(since C++17)_

```cpp
class parallel_unsequenced_policy { /* unspecified */ };
```
_(since C++17)_

```cpp
class unsequenced_policy { /* unspecified */ };
```
_(since C++20)_

## Notes
When using parallel execution policy, it is the programmer's responsibility to avoid data races and deadlocks:

Unsequenced execution policies are the only case where function calls are unsequenced with respect to each other, meaning they can be interleaved. In all other situations in C++, they are [indeterminately-sequenced](/cpp/language/eval_order/) (cannot interleave). Because of that, users are not allowed to allocate or deallocate memory, acquire mutexes, use non-lockfree [std::atomic](/cpp/atomic/atomic/) specializations, or, in general, perform any vectorization-unsafe operations when using these policies (vectorization-unsafe functions are the ones that synchronize-with another function, e.g. [std::mutex::unlock](/cpp/thread/mutex/unlock/) synchronizes-with the next [std::mutex::lock](/cpp/thread/mutex/lock/)).

If the implementation cannot parallelize or vectorize (e.g. due to lack of resources), all standard execution policies can fall back to sequential execution.

## See also
- [seqparpar_unsequnseq](/cpp/algorithm/execution_policy_tag/)
