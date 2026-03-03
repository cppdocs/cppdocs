---
title: "std::merge"
source_path: "cpp/algorithm/merge"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Merges two sorted ranges [first1,last1) and [first2,last2) into one sorted range beginning at d_first.

## Declarations
```cpp
template< class InputIt1, class InputIt2, class OutputIt >
OutputIt merge( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class ForwardIt3 >
ForwardIt3 merge( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2,
class OutputIt, class Compare >
OutputIt merge( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first, Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class ForwardIt3, class Compare >
ForwardIt3 merge( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first, Compare comp );
```
_(since C++17)_

## Parameters
- `first1, last1`: the first range of elements to merge
- `first2, last2`: the second range of elements to merge
- `d_first`: the beginning of the destination range
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to both Type1 and Type2.

## Return value
An output iterator to element past the last element copied.

## Notes
This algorithm performs a similar task as [std::set_union](/cpp/algorithm/set_union/) does. Both consume two sorted input ranges and produce a sorted output with elements from both inputs. The difference between these two algorithms is with handling values from both input ranges which compare equivalent (see notes on [LessThanComparable](/cpp/named_req/lessthancomparable/)). If any equivalent values appeared n times in the first range and m times in the second, std::merge would output all n + m occurrences whereas std::set_union would output [std::max](/cpp/algorithm/max/)(n, m) ones only. So std::merge outputs exactly [std::distance](/cpp/iterator/distance/)(first1, last1) + [std::distance](/cpp/iterator/distance/)(first2, last2) values and std::set_union may produce fewer.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <iterator>
#include <random>
#include <vector>
 
auto print = [](const auto rem, const auto& v)
{
    std::cout << rem;
    std::copy(v.begin(), v.end(), std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
};
 
int main()
{
    // fill the vectors with random numbers
    std::random_device rd;
    std::mt19937 mt(rd());
    std::uniform_int_distribution<> dis(0, 9);
 
    std::vector<int> v1(10), v2(10);
    std::generate(v1.begin(), v1.end(), std::bind(dis, std::ref(mt)));
    std::generate(v2.begin(), v2.end(), std::bind(dis, std::ref(mt)));
 
    print("Originally:\nv1: ", v1);
    print("v2: ", v2);
 
    std::sort(v1.begin(), v1.end());
    std::sort(v2.begin(), v2.end());
 
    print("After sorting:\nv1: ", v1);
    print("v2: ", v2);
 
    // merge
    std::vector<int> dst;
    std::merge(v1.begin(), v1.end(), v2.begin(), v2.end(), std::back_inserter(dst));
 
    print("After merging:\ndst: ", dst);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 780 | C++98 | the merge operation was not defined | defined |

## See also
- [inplace_merge](/cpp/algorithm/inplace_merge/)
- [is_sorted](/cpp/algorithm/is_sorted/)
- [set_union](/cpp/algorithm/set_union/)
- [sort](/cpp/algorithm/sort/)
- [stable_sort](/cpp/algorithm/stable_sort/)
- [ranges::merge](/cpp/algorithm/ranges/merge/)
