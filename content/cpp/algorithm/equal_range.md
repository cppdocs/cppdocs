---
title: "std::equal_range"
source_path: "cpp/algorithm/equal_range"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Returns a range containing all elements equivalent to value in the partitioned range [first,last).

## Declarations
```cpp
template< class ForwardIt, class T >
std::pair<ForwardIt, ForwardIt>
equal_range( ForwardIt first, ForwardIt last, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
constexpr std::pair<ForwardIt, ForwardIt>
equal_range( ForwardIt first, ForwardIt last, const T& value );
```
_(since C++26)_

```cpp
template< class ForwardIt, class T, class Compare >
std::pair<ForwardIt, ForwardIt>
equal_range( ForwardIt first, ForwardIt last,
const T& value, Compare comp );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type,
class Compare >
constexpr std::pair<ForwardIt, ForwardIt>
equal_range( ForwardIt first, ForwardIt last,
const T& value, Compare comp );
```
_(since C++26)_

## Parameters
- `first, last`: the partitioned range of elements to examine
- `value`: value to compare the elements to
- `comp`: binary predicate which returns true if the first argument is ordered before the second. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type T can be implicitly converted to both Type1 and Type2, and an object of type ForwardIt can be dereferenced and then implicitly converted to both Type1 and Type2.

## Return value
A [std::pair](/cpp/utility/pair/) containing a pair of iterators, where

## Notes
Although std::equal_range only requires [first,last) to be partitioned, this algorithm is usually used in the case where [first,last) is sorted, so that the binary search is valid for any value.

On top of the requirements of [std::lower_bound](/cpp/algorithm/lower_bound/) and [std::upper_bound](/cpp/algorithm/upper_bound/), std::equal_range also requires operator< or comp to be asymmetric (i.e., a < b and b < a always have different results).

Therefore, the intermediate results of binary search can be shared by [std::lower_bound](/cpp/algorithm/lower_bound/) and [std::upper_bound](/cpp/algorithm/upper_bound/). For example, the result of the [std::lower_bound](/cpp/algorithm/lower_bound/) call can be used as the argument of first in the [std::upper_bound](/cpp/algorithm/upper_bound/) call.

## Example
```cpp
#include <algorithm>
#include <complex>
#include <iostream>
#include <vector>
 
struct S
{
    int number;
    char name;
    // note: name is ignored by this comparison operator
    bool operator<(const S& s) const { return number < s.number; }
};
 
struct Comp
{
    bool operator()(const S& s, int i) const { return s.number < i; }
    bool operator()(int i, const S& s) const { return i < s.number; }
};
 
int main()
{
    // note: not ordered, only partitioned w.r.t. S defined below
    const std::vector<S> vec{{1, 'A'}, {2, 'B'}, {2, 'C'},
                             {2, 'D'}, {4, 'G'}, {3, 'F'}};
    const S value{2, '?'};
 
    std::cout << "Compare using S::operator<(): ";
    const auto p = std::equal_range(vec.begin(), vec.end(), value);
 
    for (auto it = p.first; it != p.second; ++it)
        std::cout << it->name << ' ';
    std::cout << '\n';
 
    std::cout << "Using heterogeneous comparison: ";
    const auto p2 = std::equal_range(vec.begin(), vec.end(), 2, Comp{});
 
    for (auto it = p2.first; it != p2.second; ++it)
        std::cout << it->name << ' ';
    std::cout << '\n';
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 0}, {2, 2}, {2, 1}, {3, 0}, {3, 1}};
    auto cmpz = [](CD x, CD y) { return x.real() < y.real(); };
    #ifdef __cpp_lib_algorithm_default_value_type
        auto p3 = std::equal_range(nums.cbegin(), nums.cend(), {2, 0}, cmpz);
    #else
        auto p3 = std::equal_range(nums.cbegin(), nums.cend(), CD{2, 0}, cmpz);
    #endif
 
    for (auto it = p3.first; it != p3.second; ++it)
        std::cout << *it << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 270 | C++98 | Compare was required to satisfy Compare and T was requiredto be LessThanComparable (strict weak ordering required) | only a partitioning is required;heterogeneous comparisons permitted |
| LWG 384 | C++98 | at most \(\scriptsize 2\log_{2}(N)+1\)2log2(N)+1 comparisonswere allowed, which is not implementable[1] | corrected to \(\scriptsize 2\log_{2}(N)+O(1)\)2log2(N)+O(1) |

## See also
- [lower_bound](/cpp/algorithm/lower_bound/)
- [upper_bound](/cpp/algorithm/upper_bound/)
- [binary_search](/cpp/algorithm/binary_search/)
- [partition](/cpp/algorithm/partition/)
- [equal](/cpp/algorithm/equal/)
- [equal_range](/cpp/container/set/equal_range/)
- [equal_range](/cpp/container/multiset/equal_range/)
- [ranges::equal_range](/cpp/algorithm/ranges/equal_range/)
