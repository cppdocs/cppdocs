---
title: "std::find, std::find_if, std::find_if_not"
source_path: "cpp/algorithm/find"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Returns an iterator to the first element in the range [first,last) that satisfies specific criteria (or last if there is no such iterator).

## Declarations
```cpp
template< class InputIt, class T >
InputIt find( InputIt first, InputIt last, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class InputIt, class T = typename std::iterator_traits
<InputIt>::value_type >
constexpr InputIt find( InputIt first, InputIt last, const T& value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class T >
ForwardIt find( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
ForwardIt find( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++26)_

```cpp
template< class InputIt, class UnaryPred >
InputIt find_if( InputIt first, InputIt last, UnaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class UnaryPred >
ForwardIt find_if( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, UnaryPred p );
```
_(since C++17)_

```cpp
template< class InputIt, class UnaryPred >
InputIt find_if_not( InputIt first, InputIt last, UnaryPred q );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class UnaryPred >
ForwardIt find_if_not( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, UnaryPred q );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to examine
- `value`: value to compare the elements to
- `policy`: the execution policy to use
- `p`: unary predicate which returns true for the required element. The expression p(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of InputIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).
- `q`: unary predicate which returns false for the required element. The expression q(v) must be convertible to bool for every argument v of type (possibly const) VT, where VT is the value type of InputIt, regardless of value category, and must not modify v. Thus, a parameter type of VT&is not allowed, nor is VT unless for VT a move is equivalent to a copy(since C++11).

## Return value
The first iterator it in the [range](/cpp/iterator/#Ranges) [first,last) satisfying the following condition or last if there is no such iterator:

## Notes
If C++11 is not available, an equivalent to std::find_if_not is to use std::find_if with the negated predicate.

## Example
```cpp
#include <algorithm>
#include <array>
#include <cassert>
#include <complex>
#include <initializer_list>
#include <iostream>
#include <vector>
 
bool is_even(int i)
{
    return i % 2 == 0;
}
 
void example_contains()
{
    const auto haystack = {1, 2, 3, 4};
 
    for (const int needle : {3, 5})
        if (std::find(haystack.begin(), haystack.end(), needle) == haystack.end())
            std::cout << "haystack does not contain " << needle << '\n';
        else
            std::cout << "haystack contains " << needle << '\n';
}
 
void example_predicate()
{
    for (const auto& haystack : {std::array{3, 1, 4}, {1, 3, 5}})
    {
        const auto it = std::find_if(haystack.begin(), haystack.end(), is_even);
        if (it != haystack.end())
            std::cout << "haystack contains an even number " << *it << '\n';
        else
            std::cout << "haystack does not contain even numbers\n";
    }
}
 
void example_list_init()
{
    std::vector<std::complex<double>> haystack{{4.0, 2.0}};
#ifdef __cpp_lib_algorithm_default_value_type
    // T gets deduced making list-initialization possible
    const auto it = std::find(haystack.begin(), haystack.end(), {4.0, 2.0});
#else
    const auto it = std::find(haystack.begin(), haystack.end(), std::complex{4.0, 2.0});
#endif
    assert(it == haystack.begin());  
}
 
int main()
{
    example_contains();
    example_predicate();
    example_list_init();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | T was required to be EqualityComparable, butthe value type of InputIt might not be T | removed the requirement |

## See also
- [adjacent_find](/cpp/algorithm/adjacent_find/)
- [find_end](/cpp/algorithm/find_end/)
- [find_first_of](/cpp/algorithm/find_first_of/)
- [mismatch](/cpp/algorithm/mismatch/)
- [search](/cpp/algorithm/search/)
- [ranges::findranges::find_ifranges::find_if_not](/cpp/algorithm/ranges/find/)
