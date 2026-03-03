---
title: "std::execution::seq, std::execution::par, std::execution::par_unseq, std::execution::unseq"
source_path: "cpp/algorithm/execution_policy_tag"
header: "<execution>"
category: "algorithm"
since: "C++17"
---

The execution policy types

## Declarations
```cpp
inline constexpr
std::execution::sequenced_policy seq { /* unspecified */ };
```
_(since C++17)_

```cpp
inline constexpr
std::execution::parallel_policy par { /* unspecified */ };
```
_(since C++17)_

```cpp
inline constexpr
std::execution::parallel_unsequenced_policy par_unseq { /* unspecified */ };
```
_(since C++17)_

```cpp
inline constexpr
std::execution::unsequenced_policy unseq { /* unspecified */ };
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <chrono>
#include <cstdint>
#include <iostream>
#include <random>
#include <vector>
 
#ifdef PARALLEL
#include <execution>
    namespace execution = std::execution;
#else
    enum class execution { seq, unseq, par_unseq, par };
#endif
 
void measure([[maybe_unused]] auto policy, std::vector<std::uint64_t> v)
{
    const auto start = std::chrono::steady_clock::now();
#ifdef PARALLEL
    std::sort(policy, v.begin(), v.end());
#else
    std::sort(v.begin(), v.end());
#endif
    const auto finish = std::chrono::steady_clock::now();
    std::cout << std::chrono::duration_cast<std::chrono::milliseconds>(finish - start)
              << '\n';
};
 
int main()
{
    std::vector<std::uint64_t> v(1'000'000);
    std::mt19937 gen {std::random_device{}()};
    std::ranges::generate(v, gen);
 
    measure(execution::seq, v);
    measure(execution::unseq, v);
    measure(execution::par_unseq, v);
    measure(execution::par, v);
}
```

## See also
- [sequenced_policyparallel_policyparallel_unsequenced_policyunsequenced_policy](/cpp/algorithm/execution_policy_tag_t/)
