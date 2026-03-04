---
title: "std::find, std::find_if, std::find_if_not"
source_path: "cpp/algorithm/find"
header: "<algorithm>"
category: "algorithm"
---

Finds the first element in a range that matches a value or satisfies a predicate.

## Declarations
```cpp
template< class InputIt, class T >
InputIt find( InputIt first, InputIt last, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class InputIt, class T = typename std::iterator_traits<InputIt>::value_type >
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
template< class ExecutionPolicy, class ForwardIt,
          class T = typename std::iterator_traits<ForwardIt>::value_type >
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
- `p`: unary predicate used by `find_if`; it must be callable with elements from the input range, return a value convertible to `bool`, and must not modify the examined element
- `q`: unary predicate used by `find_if_not`; it must be callable with elements from the input range, return a value convertible to `bool`, and must not modify the examined element

Type requirements:
- `InputIt` must satisfy [LegacyInputIterator](/cpp/named_req/InputIterator/).
- `ForwardIt` must satisfy [LegacyForwardIterator](/cpp/named_req/ForwardIterator/).
- `UnaryPred` must satisfy [Predicate](/cpp/named_req/Predicate/).

## Return value
Returns the first iterator `it` in `[first, last)` satisfying the corresponding condition, or `last` if no element satisfies it:
- `find`: `*it == value`
- `find_if`: `p(*it)` is `true`
- `find_if_not`: `q(*it)` is `false`

## Complexity
Let `N = std::distance(first, last)`.
- `find`: at most `N` comparisons with `value` using `operator==`
- `find_if`: at most `N` predicate applications of `p`
- `find_if_not`: at most `N` predicate applications of `q`

## Exceptions
For overloads taking an execution policy:
- if a function invoked as part of the algorithm throws and the policy is one of the standard execution policies, `std::terminate` is called
- for other execution-policy types, behavior is implementation-defined
- if allocation fails, `std::bad_alloc` may be thrown

## Notes
If C++11 is not available, an equivalent to std::find_if_not is to use std::find_if with the negated predicate.

These algorithms perform a linear search.

### Feature-test macro
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_algorithm_default_value_type` | `202403` | C++26 | list-initialization for algorithms (`find` overloads) |

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
| LWG 283 | C++98 | `T` was required to be `EqualityComparable`, but the value type of `InputIt` might not be `T` | requirement removed |

## See also
- [adjacent_find](/cpp/algorithm/adjacent_find/)
- [find_end](/cpp/algorithm/find_end/)
- [find_first_of](/cpp/algorithm/find_first_of/)
- [mismatch](/cpp/algorithm/mismatch/)
- [search](/cpp/algorithm/search/)
- [ranges::find, ranges::find_if, ranges::find_if_not](/cpp/algorithm/ranges/find/)
