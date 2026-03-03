---
title: "std::set_intersection"
source_path: "cpp/algorithm/set_intersection"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Constructs a sorted range beginning at d_first consisting of elements that are found in both sorted ranges [first1,last1) and [first2,last2).

## Declarations
```cpp
template< class InputIt1, class InputIt2, class OutputIt >
OutputIt set_intersection( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class ForwardIt3 >
ForwardIt3 set_intersection( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2,
class OutputIt, class Compare >
OutputIt set_intersection( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first, Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class ForwardIt3, class Compare >
ForwardIt3 set_intersection( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first, Compare comp );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first range of elements to examine
- `first2, last2`: the second range of elements to examine
- `d_first`: the beginning of the output range
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to both Type1 and Type2.

## Return value
Iterator past the end of the constructed range.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v1{7, 2, 3, 4, 5, 6, 7, 8};
    std::vector<int> v2{5, 7, 9, 7};
    std::sort(v1.begin(), v1.end());
    std::sort(v2.begin(), v2.end());
 
    std::vector<int> v_intersection;
    std::set_intersection(v1.begin(), v1.end(), v2.begin(), v2.end(),
                          std::back_inserter(v_intersection));
 
    for (int n : v_intersection)
        std::cout << n << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 291 | C++98 | it was unspecified how to handle equivalent elements in the input ranges | specified |

## See also
- [set_union](/cpp/algorithm/set_union/)
- [ranges::set_intersection](/cpp/algorithm/ranges/set_intersection/)
