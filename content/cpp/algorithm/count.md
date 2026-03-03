---
title: "std::count, std::count_if"
source_path: "cpp/algorithm/count"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Returns the number of elements in the range [first,last) satisfying specific criteria.

## Declarations
```cpp
template< class InputIt, class T >
typename std::iterator_traits<InputIt>::difference_type
count( InputIt first, InputIt last, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class InputIt, class T = typename std::iterator_traits
<InputIt>::value_type >
constexpr typename std::iterator_traits<InputIt>::difference_type
count( InputIt first, InputIt last, const T& value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class T >
typename std::iterator_traits<ForwardIt>::difference_type
count( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
typename std::iterator_traits<ForwardIt>::difference_type
count( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++26)_

```cpp
template< class InputIt, class UnaryPred >
typename std::iterator_traits<InputIt>::difference_type
count_if( InputIt first, InputIt last, UnaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class UnaryPred >
typename std::iterator_traits<ForwardIt>::difference_type
count_if( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, UnaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to examine
- `value`: the value to search for
- `policy`: the execution policy to use
- `p`: unary predicate which returns true for the required elements. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of InputIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).

## Return value
The number of iterators it in the [range](/cpp/iterator/#Ranges) [first,last) satisfying the following condition:

## Notes
For the number of elements in the range [first,last) without any additional criteria, see [std::distance](/cpp/iterator/distance/).

## Example
```cpp
#include <algorithm>
#include <array>
#include <cassert>
#include <complex>
#include <iostream>
#include <iterator>
 
int main()
{
    constexpr std::array v{1, 2, 3, 4, 4, 3, 7, 8, 9, 10};
    std::cout << "v: ";
    std::copy(v.cbegin(), v.cend(), std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    // Determine how many integers match a target value.
    for (const int target : {3, 4, 5})
    {
        const int num_items = std::count(v.cbegin(), v.cend(), target);
        std::cout << "number: " << target << ", count: " << num_items << '\n';
    }
 
    // Use a lambda expression to count elements divisible by 4.
    int count_div4 = std::count_if(v.begin(), v.end(), [](int i) { return i % 4 == 0; });
    std::cout << "numbers divisible by four: " << count_div4 << '\n';
 
    // A simplified version of `distance` with O(N) complexity:
    auto distance = [](auto first, auto last)
    {
        return std::count_if(first, last, [](auto) { return true; });
    };
    static_assert(distance(v.begin(), v.end()) == 10);
 
    std::array<std::complex<double>, 3> nums{{{4, 2}, {1, 3}, {4, 2}}};
    #ifdef __cpp_lib_algorithm_default_value_type
        // T gets deduced making list-initialization possible
        auto c = std::count(nums.cbegin(), nums.cend(), {4, 2});
    #else
        auto c = std::count(nums.cbegin(), nums.cend(), std::complex<double>{4, 2});
    #endif
    assert(c == 2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | T was required to be EqualityComparable, butthe value type of InputIt is not always T | removed the requirement |

## See also
- [distance](/cpp/iterator/distance/)
- [ranges::countranges::count_if](/cpp/algorithm/ranges/count/)
