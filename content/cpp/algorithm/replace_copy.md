---
title: "std::replace_copy, std::replace_copy_if"
source_path: "cpp/algorithm/replace_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Copies the elements from the range [first,last) to another range beginning at d_first, while replacing all elements satisfying specific criteria with new_value.

## Declarations
```cpp
template< class InputIt, class OutputIt, class T >
OutputIt replace_copy( InputIt first, InputIt last, OutputIt d_first,
const T& old_value, const T& new_value );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class T >
ForwardIt2 replace_copy
( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first,
const T& old_value, const T& new_value );
```
_(since C++17)_

```cpp
template< class InputIt, class OutputIt, class UnaryPred, class T >
OutputIt replace_copy_if
( InputIt first, InputIt last, OutputIt d_first,
UnaryPred p, const T& new_value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class InputIt, class OutputIt, class UnaryPred,
class T = typename std::iterator_traits
<OutputIt>::value_type >
constexpr OutputIt replace_copy_if
( InputIt first, InputIt last, OutputIt d_first,
UnaryPred p, const T& new_value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2,
class UnaryPred, class T >
ForwardIt2 replace_copy_if
( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first,
UnaryPred p, const T& new_value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2,
class UnaryPred, class T = typename std::iterator_traits
<ForwardIt2>::value_type >
ForwardIt2 replace_copy_if
( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last, ForwardIt2 d_first,
UnaryPred p, const T& new_value );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to copy
- `d_first`: the beginning of the destination range
- `old_value`: the value of elements to replace
- `policy`: the execution policy to use
- `p`: unary predicate which returns true if the element value should be replaced. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of InputIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).
- `new_value`: the value to use as replacement

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
List-initialization for algorithms (3,4)

## Example
```cpp
#include <algorithm>
#include <complex>
#include <iostream>
#include <vector>
 
void println(const auto& seq)
{
    for (const auto& e : seq)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<short> src{3, 1, 4, 1, 5, 9, 2, 6, 5};
    println(src);
    std::vector<int> dst(src.size());
    std::replace_copy_if(src.cbegin(), src.cend(),
                         dst.begin(),
                         [](short n){ return n > 5; }, 0);
    println(dst);
 
    std::vector<std::complex<double>> src2{{1, 3}, {2, 4}, {3, 5}},
                                      dst2(src2.size());
    println(src2);
    #ifdef __cpp_lib_algorithm_default_value_type
        std::replace_copy_if(src2.cbegin(), src2.cend(), dst2.begin(),
            [](std::complex<double> z){ return std::abs(z) < 5; },
            {4, 2}); // Possible, since the T is deduced.
    #else
        std::replace_copy_if(src2.cbegin(), src2.cend(), dst2.begin(),
            [](std::complex<double> z){ return std::abs(z) < 5; },
            std::complex<double>{4, 2});
    #endif
    println(dst2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | T was required to be CopyAssignable (and EqualityComparable forreplace_copy), but the value type of InputIt is not always T | removed the requirement |
| LWG 337 | C++98 | replace_copy_if only required InputIt tomeet the requirements of LegacyIterator[1] | corrected toLegacyInputIterator |

## See also
- [replacereplace_if](/cpp/algorithm/replace/)
- [removeremove_if](/cpp/algorithm/remove/)
- [ranges::replace_copyranges::replace_copy_if](/cpp/algorithm/ranges/replace_copy/)
