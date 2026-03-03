---
title: "std::partition_copy"
source_path: "cpp/algorithm/partition_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Copies the elements from the range [first,last) to two different ranges depending on the value returned by the predicate p.
The elements that satisfy the predicate p are copied to the range beginning at d_first_true.The rest of the elements are copied to the range beginning at d_first_false.

## Declarations
```cpp
template< class InputIt, class OutputIt1,
class OutputIt2, class UnaryPred >
std::pair<OutputIt1, OutputIt2>
partition_copy( InputIt first, InputIt last,
OutputIt1 d_first_true, OutputIt2 d_first_false,
UnaryPred p );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2,
class ForwardIt3, class UnaryPred >
std::pair<ForwardIt2, ForwardIt3>
partition_copy( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first_true, ForwardIt3 d_first_false,
UnaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to copy from
- `d_first_true`: the beginning of the output range for the elements that satisfy p
- `d_first_false`: the beginning of the output range for the elements that do not satisfy p
- `policy`: the execution policy to use
- `p`: unary predicate which returns true if the element should be placed in d_first_true. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of InputIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).

## Return value
A [std::pair](/cpp/utility/pair/) constructed from the iterator to the end of the d_first_true range and the iterator to the end of the d_first_false range.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
 
void print(auto rem, const auto& v)
{
    for (std::cout << rem; const auto& x : v)
        std::cout << x << ' ';
    std::cout << '\n';
}
 
int main()
{
    int arr[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    int true_arr[5] = {0};
    int false_arr[5] = {0};
 
    std::partition_copy(std::begin(arr), std::end(arr),
                        std::begin(true_arr), std::begin(false_arr),
                        [](int i) { return 4 < i; });
 
    print("true_arr:  ", true_arr);
    print("false_arr: ", false_arr);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0896R4 | C++11C++17 | 1. the value type of InputIt (C++11)/ForwardIt1 (C++17) was required to be CopyAssignable2. the two output ranges could overlap | 1. not required2. the behavior is undefined in this case |

## See also
- [partition](/cpp/algorithm/partition/)
- [stable_partition](/cpp/algorithm/stable_partition/)
- [copycopy_if](/cpp/algorithm/copy/)
- [remove_copyremove_copy_if](/cpp/algorithm/remove_copy/)
- [ranges::partition_copy](/cpp/algorithm/ranges/partition_copy/)
