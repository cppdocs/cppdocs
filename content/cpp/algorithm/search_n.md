---
title: "std::search_n"
source_path: "cpp/algorithm/search_n"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Searches the range [first,last) for the first sequence of count identical elements, each equal to the given value.

## Declarations
```cpp
template< class ForwardIt, class Size, class T >
ForwardIt search_n( ForwardIt first, ForwardIt last,
Size count, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class Size,
class T = typename std::iterator_traits
<ForwardIt>::value_type >
constexpr ForwardIt search_n( ForwardIt first, ForwardIt last,
Size count, const T& value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class Size, class T >
ForwardIt search_n( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
Size count, const T& value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class Size,
class T = typename std::iterator_traits
<ForwardIt>::value_type >
ForwardIt search_n( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
Size count, const T& value );
```
_(since C++26)_

```cpp
template< class ForwardIt, class Size, class T, class BinaryPred >
ForwardIt search_n( ForwardIt first, ForwardIt last,
Size count, const T& value, BinaryPred p );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class Size,
class T = typename std::iterator_traits
<ForwardIt>::value_type,
class BinaryPred >
constexpr ForwardIt search_n( ForwardIt first, ForwardIt last,
Size count, const T& value, BinaryPred p );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class Size,
class T, class BinaryPred >
ForwardIt search_n( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
Size count, const T& value, BinaryPred p );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class Size,
class T = typename std::iterator_traits
<ForwardIt>::value_type,
class BinaryPred >
ForwardIt search_n( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
Size count, const T& value, BinaryPred p );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to examine
- `count`: the length of the sequence to search for
- `value`: the value of the elements to search for
- `policy`: the execution policy to use
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The type Type1 must be such that an object of type ForwardIt can be dereferenced and then implicitly converted to Type1. The type Type2 must be such that an object of type T can be implicitly converted to Type2.

## Return value
If count is positive, returns an iterator to the beginning of the first sequence found in the range [first,last). Each iterator it in the sequence should satisfy the following condition:

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithms (1-4)

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <iostream>
#include <iterator>
#include <vector>
 
template<class Container, class Size, class T>
constexpr bool consecutive_values(const Container& c, Size count, const T& v)
{
    return std::search_n(std::begin(c), std::end(c), count, v) != std::end(c);
}
 
int main()
{
    constexpr char sequence[] = ".0_0.000.0_0.";
 
    static_assert(consecutive_values(sequence, 3, '0'));
 
    for (int n : {4, 3, 2})
        std::cout << std::boolalpha
                  << "Has " << n << " consecutive zeros: "
                  << consecutive_values(sequence, n, '0') << '\n';
 
    std::vector<std::complex<double>> nums{{4, 2}, {4, 2}, {1, 3}};
    #ifdef __cpp_lib_algorithm_default_value_type
        auto it = std::search_n(nums.cbegin(), nums.cend(), 2, {4, 2});
    #else
        auto it = std::search_n(nums.cbegin(), nums.cend(), 2, std::complex<double>{4, 2});
    #endif
    assert(it == nums.begin());
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | T was required to be EqualityComparable, butthe value type of InputIt is not always T | removed the requirement |
| LWG 426 | C++98 | the complexity upper limit was N·count,it is negative if count is negative | the upper limit is 0if count is non-positive |
| LWG 714 | C++98 | if count > 0, the complexity upper limit was N·count, but inthe worst case the number of comparisons/operations is always N | changed the upperlimit to N in this case |
| LWG 2150 | C++98 | the condition of “sequence occurence” was incorrect | corrected |

## See also
- [find_end](/cpp/algorithm/find_end/)
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [search](/cpp/algorithm/search/)
- [ranges::search_n](/cpp/algorithm/ranges/search_n/)
