---
title: "std::binary_search"
source_path: "cpp/algorithm/binary_search"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Checks if an element equivalent to value appears within the partitioned range [first,last).

## Declarations
```cpp
template< class ForwardIt, class T >
bool binary_search( ForwardIt first, ForwardIt last,
const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
constexpr bool binary_search( ForwardIt first, ForwardIt last,
const T& value );
```
_(since C++26)_

```cpp
template< class ForwardIt, class T, class Compare >
bool binary_search( ForwardIt first, ForwardIt last,
const T& value, Compare comp );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type,
class Compare >
constexpr bool binary_search( ForwardIt first, ForwardIt last,
const T& value, Compare comp );
```
_(since C++26)_

## Parameters
- `first, last`: the partitioned range of elements to examine
- `value`: value to compare the elements to
- `comp`: binary predicate which returns true if the first argument is ordered before the second. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type T can be implicitly converted to both Type1 and Type2, and an object of type ForwardIt can be dereferenced and then implicitly converted to both Type1 and Type2.

## Return value
true if an element equivalent to value is found, false otherwise.

## Notes
Although std::binary_search only requires [first,last) to be partitioned, this algorithm is usually used in the case where [first,last) is sorted, so that the binary search is valid for any value.

std::binary_search only checks whether an equivalent element exists. To obtain an iterator to that element (if exists), [std::lower_bound](/cpp/algorithm/lower_bound/) should be used instead.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <iostream>
#include <vector>
 
int main()
{
    const auto haystack = {1, 3, 4, 5, 9};
 
    for (const auto needle : {1, 2, 3})
    {
        std::cout << "Searching for " << needle << '\n';
        if (std::binary_search(haystack.begin(), haystack.end(), needle))
            std::cout << "Found " << needle << '\n';
        else
            std::cout << "Not found!\n";
    }
 
    using CD = std::complex<double>;
    std::vector<CD> nums{{1, 1}, {2, 3}, {4, 2}, {4, 3}};
    auto cmpz = [](CD x, CD y){ return abs(x) < abs(y); };
    #ifdef __cpp_lib_algorithm_default_value_type
        assert(std::binary_search(nums.cbegin(), nums.cend(), {4, 2}, cmpz));
    #else
        assert(std::binary_search(nums.cbegin(), nums.cend(), CD{4, 2}, cmpz));
    #endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 270 | C++98 | Compare was required to satisfy Compare and T was requiredto be LessThanComparable (strict weak ordering required) | only a partitioning is required;heterogeneous comparisons permitted |
| LWG 787 | C++98 | at most \(\scriptsize \log_{2}(N)+2\)log2(N)+2 comparisons were allowed | corrected to \(\scriptsize \log_{2}(N)+O(1)\)log2(N)+O(1) |

## See also
- [equal_range](/cpp/algorithm/equal_range/)
- [lower_bound](/cpp/algorithm/lower_bound/)
- [upper_bound](/cpp/algorithm/upper_bound/)
- [ranges::binary_search](/cpp/algorithm/ranges/binary_search/)
