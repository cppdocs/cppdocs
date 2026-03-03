---
title: "std::adjacent_find"
source_path: "cpp/algorithm/adjacent_find"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Searches the range [first,last) for two consecutive equal elements.

## Declarations
```cpp
template< class ForwardIt >
ForwardIt adjacent_find( ForwardIt first, ForwardIt last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
ForwardIt adjacent_find( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last );
```
_(since C++17)_

```cpp
template< class ForwardIt, class BinaryPred >
ForwardIt adjacent_find( ForwardIt first, ForwardIt last,
BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class BinaryPred >
ForwardIt adjacent_find( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
BinaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to examine
- `policy`: the execution policy to use
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to both of them.

## Return value
An iterator to the first of the first pair of identical elements, that is, the first iterator it such that *it == *(it + 1) for (1,2) or p(*it, *(it + 1)) != false for (3,4).

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v1{0, 1, 2, 3, 40, 40, 41, 41, 5};
 
    auto i1 = std::adjacent_find(v1.begin(), v1.end());
 
    if (i1 == v1.end())
        std::cout << "No matching adjacent elements\n";
    else
        std::cout << "The first adjacent pair of equal elements is at "
                  << std::distance(v1.begin(), i1) << ", *i1 = "
                  << *i1 << '\n';
 
    auto i2 = std::adjacent_find(v1.begin(), v1.end(), std::greater<int>());
    if (i2 == v1.end())
        std::cout << "The entire vector is sorted in ascending order\n";
    else
        std::cout << "The last element in the non-decreasing subsequence is at "
                  << std::distance(v1.begin(), i2) << ", *i2 = " << *i2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 240 | C++98 | the predicate was applied std::find(first, last, value) - first timesfor (1,3), where value was never defined | applied std::min((result - first) + 1,(last - first) - 1) times |

## See also
- [unique](/cpp/algorithm/unique/)
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
