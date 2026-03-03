---
title: "std::ranges::remove, std::ranges::remove_if"
source_path: "cpp/algorithm/ranges/remove"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Removes all elements satisfying specific criteria from the range [first,last) and returns a subrange [ret,last), where ret is a past-the-end iterator for the new end of the range.

## Declarations
```cpp
Call signature
```

```cpp
template< std::permutable I, std::sentinel_for<I> S,
class T, class Proj = std::identity >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr ranges::subrange<I>
remove( I first, S last, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::permutable I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj> >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr ranges::subrange<I>
remove( I first, S last, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::forward_range R,
class T, class Proj = std::identity >
requires std::permutable<ranges::iterator_t<R>> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::borrowed_subrange_t<R>
remove( R&& r, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj> >
requires std::permutable<ranges::iterator_t<R>> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::borrowed_subrange_t<R>
remove( R&& r, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::permutable I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr ranges::subrange<I>
remove_if( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::forward_range R,
class Proj = std::identity,
std::indirect_unary_predicate
<std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::permutable<ranges::iterator_t<R>>
constexpr ranges::borrowed_subrange_t<R>
remove_if( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to process
- `r`: the range of elements to process
- `value`: the value of elements to remove
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
{ret, last}, where [first,ret) is the resulting subrange after removal, and the elements in subrange [ret,last) are all in valid but unspecified state, i.e. [ret,last) is the subrange to be erased.

## Notes
A call to ranges::remove is typically followed by a call to a container's erase member function, which erases the unspecified values and reduces the physical size of the container to match its new logical size. These two invocations together constitute a so-called [Erase-remove idiom](https://en.wikipedia.org/wiki/Erase-remove_idiom), which can be achieved by the free function [std::erase](/cpp/container/vector/erase2/) that has [overloads](/cpp/container/#Non-member_function_table) for all standard sequence containers, or [std::erase_if](/cpp/container/vector/erase2/) that has [overloads](/cpp/container/#Non-member_function_table) for all standard containers.

The similarly-named container [member functions](/cpp/container/#Member_function_table) [list::remove](/cpp/container/list/remove/), [list::remove_if](/cpp/container/list/remove/), [forward_list::remove](/cpp/container/forward_list/remove/), and [forward_list::remove_if](/cpp/container/forward_list/remove/) erase the removed elements.

These algorithms usually cannot be used with associative containers such as [std::set](/cpp/container/set/) and [std::map](/cpp/container/map/) because their iterator types do not dereference to [MoveAssignable](/cpp/named_req/moveassignable/) types (the keys in these containers are not modifiable).

Because ranges::remove takes value by reference, it can have unexpected behavior if it is a reference to an element of the range [first,last).

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <complex>
#include <cctype>
#include <iomanip>
#include <iostream>
#include <string>
#include <string_view>
#include <vector>
 
int main()
{
    std::string v1{"No - Diagnostic - Required"};
    std::cout << std::quoted(v1) << " (v1, size: " << v1.size() << ")\n";
    const auto ret = std::ranges::remove(v1, ' ');
    std::cout << std::quoted(v1) << " (v1 after `remove`, size: " << v1.size() << ")\n";
    std::cout << ' ' << std::string(std::distance(v1.begin(), ret.begin()), '^') << '\n';
    v1.erase(ret.begin(), ret.end());
    std::cout << std::quoted(v1) << " (v1 after `erase`, size: " << v1.size() << ")\n\n";
 
    // remove_if with custom unary predicate:
    auto rm = [](char c) { return !std::isupper(c); };
    std::string v2{"Substitution Failure Is Not An Error"};
    std::cout << std::quoted(v2) << " (v2, size: " << v2.size() << ")\n";
    const auto [first, last] = std::ranges::remove_if(v2, rm);
    std::cout << std::quoted(v2) << " (v2 after `remove_if`, size: " << v2.size() << ")\n";
    std::cout << ' ' << std::string(std::distance(v2.begin(), first), '^') << '\n';
    v2.erase(first, last);
    std::cout << std::quoted(v2) << " (v2 after `erase`, size: " << v2.size() << ")\n\n";
 
    // creating a view into a container that is modified by `remove_if`:
    for (std::string s : {"Small Object Optimization", "Non-Type Template Parameter"})
        std::cout << std::quoted(s) << " => "
            << std::string_view{begin(s), std::ranges::remove_if(s, rm).begin()} << '\n';
 
    std::vector<std::complex<double>> nums{{2, 2}, {1, 3}, {4, 8}};
    #ifdef __cpp_lib_algorithm_default_value_type
        auto e = std::ranges::remove(nums, {1, 3}); // T gets deduced
    #else
        auto e = std::ranges::remove(nums, std::complex<double>{1, 3});
    #endif
    nums.erase(e.begin(), e.end());
    assert((nums == std::vector<std::complex<double>>{{2, 2}, {4, 8}}));
}
```

## See also
- [ranges::remove_copyranges::remove_copy_if](/cpp/algorithm/ranges/remove_copy/)
- [ranges::unique](/cpp/algorithm/ranges/unique/)
- [removeremove_if](/cpp/algorithm/remove/)
