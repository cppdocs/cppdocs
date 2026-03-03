---
title: "std::unique"
source_path: "cpp/algorithm/unique"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Removes all except the first element from every consecutive group of equivalent elements from the range [first,last) and returns a past-the-end iterator for the new end of the range.

## Declarations
```cpp
template< class ForwardIt >
ForwardIt unique( ForwardIt first, ForwardIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
ForwardIt unique( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last );
```
_(since C++17)_

```cpp
template< class ForwardIt, class BinaryPred >
ForwardIt unique( ForwardIt first, ForwardIt last, BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class BinaryPred >
ForwardIt unique( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, BinaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to process
- `policy`: the execution policy to use
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to both of them.

## Return value
A ForwardIt to the new end of the range.

## Notes
A call to unique is typically followed by a call to a container's erase member function to actually remove elements from the container.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>
 
int main()
{
    // a vector containing several duplicate elements
    std::vector<int> v{1, 2, 1, 1, 3, 3, 3, 4, 5, 4};
    auto print = [&](int id)
    {
        std::cout << "@" << id << ": ";
        for (int i : v)
            std::cout << i << ' ';
        std::cout << '\n';
    };
    print(1);
 
    // remove consecutive (adjacent) duplicates
    auto last = std::unique(v.begin(), v.end());
    // v now holds {1 2 1 3 4 5 4 x x x}, where 'x' is indeterminate
    v.erase(last, v.end());
    print(2);
 
    // sort followed by unique, to remove all duplicates
    std::sort(v.begin(), v.end()); // {1 1 2 3 4 4 5}
    print(3);
 
    last = std::unique(v.begin(), v.end());
    // v now holds {1 2 3 4 5 x x}, where 'x' is indeterminate
    v.erase(last, v.end());
    print(4);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 202 | C++98 | the behavior was unclear if the elements arecompared using a non-equivalence relation | the behavior isundefined in this case |

## See also
- [adjacent_find](/cpp/algorithm/adjacent_find/)
- [unique_copy](/cpp/algorithm/unique_copy/)
- [removeremove_if](/cpp/algorithm/remove/)
- [unique](/cpp/container/list/unique/)
- [unique](/cpp/container/forward_list/unique/)
- [ranges::unique](/cpp/algorithm/ranges/unique/)
