---
title: "std::remove_copy, std::remove_copy_if"
source_path: "cpp/algorithm/remove_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Copies elements from the range [first,last), to another range beginning at d_first, omitting the elements which satisfy specific criteria.

## Declarations
```cpp
template< class InputIt, class OutputIt, class T >
OutputIt remove_copy( InputIt first, InputIt last,
OutputIt d_first, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class InputIt, class OutputIt,
class T = typename std::iterator_traits
<InputIt>::value_type >
constexpr OutputIt remove_copy( InputIt first, InputIt last,
OutputIt d_first, const T& value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class T >
ForwardIt2 remove_copy( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, const T& value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class T = typename std::iterator_traits
<ForwardIt1>::value_type >
ForwardIt2 remove_copy( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, const T& value );
```
_(since C++26)_

```cpp
template< class InputIt, class OutputIt, class UnaryPred >
OutputIt remove_copy_if( InputIt first, InputIt last,
OutputIt d_first, UnaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class UnaryPred >
ForwardIt2 remove_copy_if( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 d_first, UnaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to copy
- `d_first`: the beginning of the destination range
- `value`: the value of the elements not to copy
- `policy`: the execution policy to use

## Return value
Iterator to the element past the last element copied.

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
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
int main()
{
    // Erase the hash characters '#' on the fly.
    std::string str = "#Return #Value #Optimization";
    std::cout << "before: " << std::quoted(str) << '\n';
 
    std::cout << "after:  \"";
    std::remove_copy(str.begin(), str.end(),
                     std::ostream_iterator<char>(std::cout), '#');
    std::cout << "\"\n";
 
    // Erase {1, 3} value on the fly.
    std::vector<std::complex<double>> nums{{2, 2}, {1, 3}, {4, 8}, {1, 3}};
    std::remove_copy(nums.begin(), nums.end(),
                     std::ostream_iterator<std::complex<double>>(std::cout),
    #ifdef __cpp_lib_algorithm_default_value_type
                     {1, 3}); // T gets deduced
    #else
                     std::complex<double>{1, 3});
    #endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 779 | C++98 | T was required to be EqualityComparable, butthe value type of ForwardIt is not always T | required *d_first = *firstto be valid instead |

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [copycopy_if](/cpp/algorithm/copy/)
- [partition_copy](/cpp/algorithm/partition_copy/)
- [ranges::remove_copyranges::remove_copy_if](/cpp/algorithm/ranges/remove_copy/)
