---
title: "std::partition"
source_path: "cpp/algorithm/partition"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Reorders the elements in the range [first,last) in such a way that all elements for which the predicate p returns true precede all elements for which predicate p returns false. Relative order of the elements is not preserved.

## Declarations
```cpp
template< class ForwardIt, class UnaryPred >
ForwardIt partition( ForwardIt first, ForwardIt last, UnaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class UnaryPred >
ForwardIt partition( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, UnaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to reorder
- `policy`: the execution policy to use
- `p`: unary predicate which returns true if the element should be ordered before other elements. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of ForwardIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).

## Return value
Iterator to the first element of the second group.

## Example
```cpp
#include <algorithm>
#include <forward_list>
#include <iostream>
#include <iterator>
#include <vector>
 
template<class ForwardIt>
void quicksort(ForwardIt first, ForwardIt last)
{
    if (first == last)
        return;
 
    auto pivot = *std::next(first, std::distance(first, last) / 2);
    auto middle1 = std::partition(first, last, [pivot](const auto& em)
    {
        return em < pivot;
    });
    auto middle2 = std::partition(middle1, last, [pivot](const auto& em)
    {
        return !(pivot < em);
    });
 
    quicksort(first, middle1);
    quicksort(middle2, last);
}
 
int main()
{
    std::vector<int> v{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    std::cout << "Original vector: ";
    for (int elem : v)
        std::cout << elem << ' ';
 
    auto it = std::partition(v.begin(), v.end(), [](int i) {return i % 2 == 0;});
 
    std::cout << "\nPartitioned vector: ";
    std::copy(std::begin(v), it, std::ostream_iterator<int>(std::cout, " "));
    std::cout << "* ";
    std::copy(it, std::end(v), std::ostream_iterator<int>(std::cout, " "));
 
    std::forward_list<int> fl {1, 30, -4, 3, 5, -4, 1, 6, -8, 2, -5, 64, 1, 92};
    std::cout << "\nUnsorted list: ";
    for (int n : fl)
        std::cout << n << ' ';
 
    quicksort(std::begin(fl), std::end(fl));
    std::cout << "\nSorted using quicksort: ";
    for (int fi : fl)
        std::cout << fi << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 498 | C++98 | std::partition required first andlast to be LegacyBidirectionalIterator | only required to beLegacyForwardIterator |
| LWG 2150 | C++98 | std::partition was only required to place one elementsatisfying p before one element not satisfying p | corrected therequirement |

## See also
- [is_partitioned](/cpp/algorithm/is_partitioned/)
- [stable_partition](/cpp/algorithm/stable_partition/)
- [ranges::partition](/cpp/algorithm/ranges/partition/)
