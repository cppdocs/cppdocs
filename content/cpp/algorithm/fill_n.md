---
title: "std::fill_n"
source_path: "cpp/algorithm/fill_n"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

1) Assigns the given value to the first count elements in the range beginning at first if count > 0. Does nothing otherwise.

## Declarations
```cpp
template< class OutputIt, class Size, class T >
OutputIt fill_n( OutputIt first, Size count, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class OutputIt, class Size,
class T = typename std::iterator_traits
<OutputIt>::value_type >
constexpr OutputIt fill_n( OutputIt first, Size count,
const T& value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class Size, class T >
ForwardIt fill_n( ExecutionPolicy&& policy,
ForwardIt first, Size count, const T& value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class Size,
class T = typename std::iterator_traits
<OutputIt>::value_type >
ForwardIt fill_n( ExecutionPolicy&& policy,
ForwardIt first, Size count, const T& value );
```
_(since C++26)_

## Parameters
- `first`: the beginning of the range of elements to modify
- `count`: number of elements to modify
- `value`: the value to be assigned
- `policy`: the execution policy to use

## Return value
Iterator one past the last element assigned if count > 0, first otherwise.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithms (1,2)

## Example
```cpp
#include <algorithm>
#include <complex>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    std::vector<int> v1{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
 
    // replace values of the first 5 elements with -1
    std::fill_n(v1.begin(), 5, -1);
 
    std::copy_n(v1.cbegin(), v1.size(), std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
 
    std::vector<std::complex<double>> nums{{1, 3}, {2, 2}, {4, 8}};
    #ifdef __cpp_lib_algorithm_default_value_type
        std::fill_n(nums.begin(), 2, {4, 2});
    #else
        std::fill_n(nums.begin(), 2, std::complex<double>{4, 2});
    #endif
    std::copy_n(nums.cbegin(), nums.size(),
                std::ostream_iterator<std::complex<double>>(std::cout, " "));
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | T was required to be CopyAssignable, butT is not always writable to OutputIt | required to be writable instead |
| LWG 426 | C++98 | the complexity requirement was “exactly countassignments”, which is broken if count is negative | no assignment ifcount is non-positive |
| LWG 865 | C++98 | the location of the first element followingthe filling range was not returned | returned |

## See also
- [fill](/cpp/algorithm/fill/)
- [ranges::fill_n](/cpp/algorithm/ranges/fill_n/)
