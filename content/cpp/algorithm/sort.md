---
title: "std::sort"
source_path: "cpp/algorithm/sort"
header: "<algorithm>"
category: "algorithm"
since: "C++98"
---

Sorts the elements in `[first, last)` into non-descending order.

`std::sort` is not stable: equivalent elements may be reordered. Use [std::stable_sort](/cpp/algorithm/stable_sort/) when preserving relative order of equal elements matters.

## Declarations
```cpp
template< class RandomIt >
void sort( RandomIt first, RandomIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt >
void sort( ExecutionPolicy&& policy, RandomIt first, RandomIt last );
```
_(since C++17)_

```cpp
template< class RandomIt, class Compare >
void sort( RandomIt first, RandomIt last, Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class RandomIt, class Compare >
void sort( ExecutionPolicy&& policy, RandomIt first, RandomIt last, Compare comp );
```
_(since C++17)_

## Example
```cpp
#include <algorithm>
#include <array>
#include <functional>
#include <iostream>

int main()
{
    std::array<int, 8> v{5, 1, 8, 3, 3, 7, 2, 4};

    std::sort(v.begin(), v.end());
    for (int x : v)
        std::cout << x << ' ';
    std::cout << '\n';

    std::sort(v.begin(), v.end(), std::greater<int>{});
    for (int x : v)
        std::cout << x << ' ';
    std::cout << '\n';
}
```

## Semantics
- Sorts in ascending order with `operator<` overloads (1,2), or with `comp` overloads (3,4).
- Requires random-access iterators.
- The comparison relation must model strict weak ordering.
- Equal elements are not guaranteed to keep their original relative order.

## Parameters
- `first, last`: range to sort (`[first, last)`).
- `policy`: execution policy for parallel/vectorized execution overloads.
- `comp`: callable returning whether the first argument should appear before the second.

## Complexity
| Overloads | Comparator applications |
| --- | --- |
| (1), (3) | `O(N log N)` comparisons (worst case) |
| (2), (4) | `O(N log N)` comparator applications |

Where `N = std::distance(first, last)`.

## Exceptions
For overloads taking an execution policy:
- if a function invoked as part of the algorithm throws and the policy is one of the standard execution policies, `std::terminate` is called
- for other execution-policy types, behavior is implementation-defined
- if allocation fails, `std::bad_alloc` may be thrown

## Notes
Typical implementations use introsort to satisfy worst-case `O(N log N)` while preserving good average performance.

## See also
- [std::stable_sort](/cpp/algorithm/stable_sort/): stable ordering of equivalent elements
- [std::partial_sort](/cpp/algorithm/partial_sort/): fully sorts only a prefix
- [std::ranges::sort](/cpp/algorithm/ranges/sort/): ranges-based counterpart

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 713 | C++98 | `O(N log N)` was only required on average | required in the worst case |
