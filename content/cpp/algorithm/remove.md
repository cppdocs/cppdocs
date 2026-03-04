---
title: "std::remove, std::remove_if"
source_path: "cpp/algorithm/remove"
header: "<algorithm>"
category: "algorithm"
since: "C++98"
---

Removes all elements satisfying specific criteria from the range [first,last) and returns a past-the-end iterator for the new end of the range.

## Declarations
```cpp
template< class ForwardIt, class T >
ForwardIt remove( ForwardIt first, ForwardIt last, const T& value );
```
_(constexpr since C++20) (until C++26)_

```cpp
template< class ForwardIt, class T = typename std::iterator_traits
<ForwardIt>::value_type >
constexpr ForwardIt remove( ForwardIt first, ForwardIt last,
const T& value );
```
_(since C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class T >
ForwardIt remove( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++17) (until C++26)_

```cpp
template< class ExecutionPolicy, class ForwardIt,
class T = typename std::iterator_traits
<ForwardIt>::value_type >
ForwardIt remove( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, const T& value );
```
_(since C++26)_

```cpp
template< class ForwardIt, class UnaryPred >
ForwardIt remove_if( ForwardIt first, ForwardIt last, UnaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt, class UnaryPred >
ForwardIt remove_if( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last, UnaryPred p );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to process
- `value`: the value of elements to remove
- `policy`: the execution policy to use
- `p`: unary predicate used by `remove_if`; for each `v` of type (possibly const) `VT` where `VT` is the value type of `ForwardIt`, `p(v)` must be valid, convertible to `bool`, and must not modify `v`

Type requirements:
- `ForwardIt` must satisfy [LegacyForwardIterator](/cpp/named_req/ForwardIterator/).
- `UnaryPred` must satisfy [Predicate](/cpp/named_req/Predicate/).

## Return value
Past-the-end iterator for the new range of values (if this is not end, then it points to an unspecified value, and so do iterators to any values between this iterator and end).

## Complexity
Let `N = std::distance(first, last)`.
- `remove`: exactly `N` comparisons with `value`
- `remove_if`: exactly `N` predicate applications

## Exceptions
For overloads taking an execution policy:
- if a function invoked as part of the algorithm throws and the policy is one of the standard execution policies, `std::terminate` is called
- for other execution-policy types, behavior is implementation-defined
- if allocation fails, `std::bad_alloc` may be thrown

## Notes
A call to remove is typically followed by a call to a container's erase member function to actually remove elements from the container. These two invocations together constitute a so-called [Erase-remove idiom](https://en.wikipedia.org/wiki/Erase-remove_idiom).

The same effect can also be achieved by the non-member helpers [std::erase](/cpp/container/vector/erase2/) and [std::erase_if](/cpp/container/vector/erase2/) (with overloads for standard containers).

The similarly-named container [member functions](/cpp/container/#Member_function_table) [list::remove](/cpp/container/list/remove/), [list::remove_if](/cpp/container/list/remove/), [forward_list::remove](/cpp/container/forward_list/remove/), and [forward_list::remove_if](/cpp/container/forward_list/remove/) erase the removed elements.

These algorithms cannot be used with associative containers such as [std::set](/cpp/container/set/) and [std::map](/cpp/container/map/) because their iterator types do not dereference to [MoveAssignable](/cpp/named_req/moveassignable/) types (the keys in these containers are not modifiable).

The standard library also defines an overload of [std::remove](/cpp/io/c/remove/) in [<cstdio>](/cpp/header/cstdio/), which takes a const char* and is used to delete files.

Because std::remove takes value by reference, it can have unexpected behavior if it is a reference to an element of the range [first,last).

### Feature-test macro
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_algorithm_default_value_type` | `202403` | C++26 | list-initialization for algorithms (`remove` overloads) |

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <cctype>
#include <complex>
#include <iostream>
#include <string>
#include <string_view>
#include <vector>
 
int main()
{
    std::string str1{"Text with some   spaces"};
 
    auto noSpaceEnd = std::remove(str1.begin(), str1.end(), ' ');
 
    // The spaces are removed from the string only logically.
    // Note, we use view, the original string is still not shrunk:
    std::cout << std::string_view(str1.begin(), noSpaceEnd) 
              << " size: " << str1.size() << '\n';
 
    str1.erase(noSpaceEnd, str1.end());
 
    // The spaces are removed from the string physically.
    std::cout << str1 << " size: " << str1.size() << '\n';
 
    std::string str2 = "Text\n with\tsome \t  whitespaces\n\n";
    str2.erase(std::remove_if(str2.begin(), 
                              str2.end(),
                              [](unsigned char x) { return std::isspace(x); }),
               str2.end());
    std::cout << str2 << '\n';
 
    std::vector<std::complex<double>> nums{{2, 2}, {1, 3}, {4, 8}};
    #ifdef __cpp_lib_algorithm_default_value_type
        nums.erase(std::remove(nums.begin(), nums.end(), {1, 3}), nums.end());
    #else
        nums.erase(std::remove(nums.begin(), nums.end(), std::complex<double>{1, 3}),
                   nums.end());
    #endif
    assert((nums == std::vector<std::complex<double>>{{2, 2}, {4, 8}}));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 283 | C++98 | `T` was required to be `EqualityComparable`, but the value type of `ForwardIt` is not always `T` | required the value type of `ForwardIt` to be `CopyAssignable` instead |

## See also
- [remove_copy, remove_copy_if](/cpp/algorithm/remove_copy/)
- [unique](/cpp/algorithm/unique/)
- [ranges::remove, ranges::remove_if](/cpp/algorithm/ranges/remove/)
