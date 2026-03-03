---
title: "std::lower_bound"
source_path: "cpp/algorithm/lower_bound"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Searches for the first element in the partitioned range [first,last) which is not ordered before value.

## Declarations
```cpp
template< class ForwardIt, class T >
ForwardIt lower_bound( ForwardIt first, ForwardIt last,
const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
constexpr ForwardIt lower_bound( ForwardIt first, ForwardIt last,
const T& value );
```
_(since C++26)_

```cpp
template< class ForwardIt, class T, class Compare >
ForwardIt lower_bound( ForwardIt first, ForwardIt last,
const T& value, Compare comp );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type,
class Compare >
constexpr ForwardIt lower_bound( ForwardIt first, ForwardIt last,
const T& value, Compare comp );
```
_(since C++26)_

## Parameters
- `first, last`: the partitioned range of elements to examine
- `value`: value to compare the elements to
- `comp`: binary predicate which returns true if the first argument is ordered before the second. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The type Type1 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to Type1. The type Type2 must be such that an object of type T can be implicitly converted to Type2.

## Return value
Iterator to the first element of the range [first,last) not ordered before value, or last if no such element is found.

## Notes
Although std::lower_bound only requires [first,last) to be partitioned, this algorithm is usually used in the case where [first,last) is sorted, so that the binary search is valid for any value.

Unlike [std::binary_search](/cpp/algorithm/binary_search/), std::lower_bound does not require operator< or comp to be asymmetric (i.e., a < b and b < a always have different results). In fact, it does not even require value < *iter or comp(value, *iter) to be well-formed for any iterator iter in [first,last).

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <iostream>
#include <vector>
 
struct PriceInfo { double price; };
 
int main()
{
    const std::vector<int> data{1, 2, 4, 5, 5, 6};
 
    for (int i = 0; i < 8; ++i)
    {
        // Search for first element x such that i ≤ x
        auto lower = std::lower_bound(data.begin(), data.end(), i);
 
        std::cout << i << " ≤ ";
        lower != data.end()
            ? std::cout << *lower << " at index " << std::distance(data.begin(), lower)
            : std::cout << "not found";
        std::cout << '\n';
    }
 
    std::vector<PriceInfo> prices{{100.0}, {101.5}, {102.5}, {102.5}, {107.3}};
 
    for (const double to_find : {102.5, 110.2})
    {
        auto prc_info = std::lower_bound(prices.begin(), prices.end(), to_find,
            [](const PriceInfo& info, double value)
            {
                return info.price < value;
            });
 
        prc_info != prices.end()
            ? std::cout << prc_info->price << " at index " << prc_info - prices.begin()
            : std::cout << to_find << " not found";
        std::cout << '\n';
    }
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 0}, {2, 2}, {2, 1}, {3, 0}};
    auto cmpz = [](CD x, CD y) { return x.real() < y.real(); };
    #ifdef __cpp_lib_algorithm_default_value_type
        auto it = std::lower_bound(nums.cbegin(), nums.cend(), {2, 0}, cmpz);
    #else
        auto it = std::lower_bound(nums.cbegin(), nums.cend(), CD{2, 0}, cmpz);
    #endif
    assert((*it == CD{2, 2}));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 270 | C++98 | Compare was required to satisfy Compare and T was requiredto be LessThanComparable (strict weak ordering required) | only a partitioning is required;heterogeneous comparisons permitted |
| LWG 384 | C++98 | at most \(\scriptsize \log(N)+1\)log(N)+1 comparisons were allowed | corrected to \(\scriptsize \log_{2}(N)+O(1)\)log2(N)+1 |
| LWG 2150 | C++98 | if any iterator iter exists in [first, last) such thatbool(comp(*iter, value)) is false, std::lower_boundcould return any iterator in [iter, last) | no iterator afteriter can be returned |

## See also
- [equal_range](/cpp/algorithm/equal_range/)
- [partition](/cpp/algorithm/partition/)
- [partition_point](/cpp/algorithm/partition_point/)
- [upper_bound](/cpp/algorithm/upper_bound/)
- [lower_bound](/cpp/container/set/lower_bound/)
- [lower_bound](/cpp/container/multiset/lower_bound/)
- [ranges::lower_bound](/cpp/algorithm/ranges/lower_bound/)
