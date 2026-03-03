---
title: "std::replace, std::replace_if"
source_path: "cpp/algorithm/replace"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Replaces all elements in the range [first,last) with new_value if they satisfy specific criteria.

## Declarations
```cpp
template< class ForwardIt, class T >
void replace( ForwardIt first, ForwardIt last,
const T& old_value, const T& new_value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
constexpr void replace( ForwardIt first, ForwardIt last,
const T& old_value, const T& new_value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class T >
void replace( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
const T& old_value, const T& new_value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt,
class T = typename std::iterator_traits
<ForwardIt>::value_type >
void replace( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
const T& old_value, const T& new_value );
```
_(since C++26)_

```cpp
template< class ForwardIt, class UnaryPred, class T >
void replace_if( ForwardIt first, ForwardIt last,
UnaryPred p, const T& new_value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class UnaryPred,
class T = typename std::iterator_traits
<ForwardIt>::value_type> >
constexpr void replace_if( ForwardIt first, ForwardIt last,
UnaryPred p, const T& new_value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class UnaryPred, class T >
void replace_if( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
UnaryPred p, const T& new_value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class UnaryPred,
class T = typename std::iterator_traits
<ForwardIt>::value_type> >
void replace_if( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
UnaryPred p, const T& new_value );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to process
- `old_value`: the value of elements to replace
- `policy`: the execution policy to use
- `p`: unary predicate which returns true if the element value should be replaced. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of ForwardIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).
- `new_value`: the value to use as replacement

## Return value
(none)

## Notes
Because the algorithm takes old_value and new_value by reference, it can have unexpected behavior if either is a reference to an element of the range [first,last).

## Example
```cpp
#include <algorithm>
#include <array>
#include <complex>
#include <functional>
#include <iostream>
 
void println(const auto& seq)
{
    for (const auto& e : seq)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::array<int, 10> s{5, 7, 4, 2, 8, 6, 1, 9, 0, 3};
 
    // Replace all occurrences of 8 with 88.
    std::replace(s.begin(), s.end(), 8, 88);
    println(s);
 
    // Replace all values less than 5 with 55.
    std::replace_if(s.begin(), s.end(), 
                    std::bind(std::less<int>(), std::placeholders::_1, 5), 55);
    println(s);
 
    std::array<std::complex<double>, 2> nums{{{1, 3}, {1, 3}}};
    #ifdef __cpp_lib_algorithm_default_value_type
        std::replace(nums.begin(), nums.end(), {1, 3}, {4, 2});
    #else
        std::replace(nums.begin(), nums.end(), std::complex<double>{1, 3},
                                               std::complex<double>{4, 2});
    #endif
    println(nums);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | T was required to be CopyAssignable (and EqualityComparablefor replace), but the value type of ForwardIt is notalways T and T is not always writable to ForwardIt | required *first = new_valueto be valid instead |

## See also
- [replace_copyreplace_copy_if](/cpp/algorithm/replace_copy/)
- [ranges::replaceranges::replace_if](/cpp/algorithm/ranges/replace/)
