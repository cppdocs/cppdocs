---
title: "std::set_union"
source_path: "cpp/algorithm/set_union"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Constructs a sorted union beginning at d_first consisting of the set of elements present in one or both sorted ranges [first1,last1) and [first2,last2).

## Declarations
```cpp
template< class InputIt1, class InputIt2, class OutputIt >
OutputIt set_union( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class ForwardIt3 >
ForwardIt3 set_union( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2,
class OutputIt, class Compare >
OutputIt set_union( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first, Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class ForwardIt3, class Compare >
ForwardIt3 set_union( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first, Compare comp );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first input sorted range
- `first2, last2`: the second input sorted range
- `d_first`: the beginning of the output range
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to both Type1 and Type2.

## Return value
Iterator past the end of the constructed range.

## Notes
This algorithm performs a similar task as [std::merge](/cpp/algorithm/merge/) does. Both consume two sorted input ranges and produce a sorted output with elements from both inputs. The difference between these two algorithms is with handling values from both input ranges which compare equivalent (see notes on [LessThanComparable](/cpp/named_req/lessthancomparable/)). If any equivalent values appeared n times in the first range and m times in the second, [std::merge](/cpp/algorithm/merge/) would output all n + m occurrences whereas std::set_union would output [std::max](/cpp/algorithm/max/)(n, m) ones only. So std::merge outputs exactly [std::distance](/cpp/iterator/distance/)(first1, last1) + [std::distance](/cpp/iterator/distance/)(first2, last2) values and std::set_union may produce fewer.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
void println(const std::vector<int>& v)
{
    for (int i : v)
        std::cout << i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<int> v1, v2, dest;
 
    v1 = {1, 2, 3, 4, 5};
    v2 = {3, 4, 5, 6, 7};
 
    std::set_union(v1.cbegin(), v1.cend(),
                   v2.cbegin(), v2.cend(),
                   std::back_inserter(dest));
    println(dest);
 
    dest.clear();
 
    v1 = {1, 2, 3, 4, 5, 5, 5};
    v2 = {3, 4, 5, 6, 7};
 
    std::set_union(v1.cbegin(), v1.cend(),
                   v2.cbegin(), v2.cend(),
                   std::back_inserter(dest));
    println(dest);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 291 | C++98 | it was unspecified how to handle equivalent elements in the input ranges | specified |

## See also
- [includes](/cpp/algorithm/includes/)
- [merge](/cpp/algorithm/merge/)
- [set_difference](/cpp/algorithm/set_difference/)
- [set_intersection](/cpp/algorithm/set_intersection/)
- [set_symmetric_difference](/cpp/algorithm/set_symmetric_difference/)
- [ranges::set_union](/cpp/algorithm/ranges/set_union/)
