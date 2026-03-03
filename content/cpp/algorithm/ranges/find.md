---
title: "std::ranges::find, std::ranges::find_if, std::ranges::find_if_not"
source_path: "cpp/algorithm/ranges/find"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Returns the first element in the range [first,last) that satisfies specific criteria:

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T, class Proj = std::identity >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr I find( I first, S last, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj> >
requires std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr I find( I first, S last, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R, class T, class Proj = std::identity >
requires std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::borrowed_iterator_t<R>
find( R&& r, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj> >
requires std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr ranges::borrowed_iterator_t<R>
find( R&& r, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr I find_if( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirect_unary_predicate
<std::projected<ranges::iterator_t<R>, Proj>> Pred >
constexpr ranges::borrowed_iterator_t<R>
find_if( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
constexpr I find_if_not( I first, S last, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
std::indirect_unary_predicate
<std::projected<ranges::iterator_t<R>, Proj>> Pred >
constexpr ranges::borrowed_iterator_t<R>
find_if_not( R&& r, Pred pred, Proj proj = {} );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to examine
- `r`: the range of the elements to examine
- `value`: value to compare the elements to
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
Iterator to the first element satisfying the condition or iterator equal to last if no such element is found.

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
#include <cassert>
#include <complex>
#include <format>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
void projector_example()
{
    struct folk_info
    {
        unsigned uid;
        std::string name, position;
    };
 
    std::vector<folk_info> folks
    {
        {0, "Ana", "dev"},
        {1, "Bob", "devops"},
        {2, "Eve", "ops"}
    };
 
    const auto who{"Eve"};
    if (auto it = std::ranges::find(folks, who, &folk_info::name); it != folks.end())
        std::cout << std::format("Profile:\n"
                                 "    UID: {}\n"
                                 "    Name: {}\n"
                                 "    Position: {}\n\n",
                                 it->uid, it->name, it->position);
}
 
int main()
{
    namespace ranges = std::ranges;
 
    projector_example();
 
    const int n1 = 3;
    const int n2 = 5;
    const auto v = {4, 1, 3, 2};
 
    if (ranges::find(v, n1) != v.end())
        std::cout << "v contains: " << n1 << '\n';
    else
        std::cout << "v does not contain: " << n1 << '\n';
 
    if (ranges::find(v.begin(), v.end(), n2) != v.end())
        std::cout << "v contains: " << n2 << '\n';
    else
        std::cout << "v does not contain: " << n2 << '\n';
 
    auto is_even = [](int x) { return x % 2 == 0; };
 
    if (auto result = ranges::find_if(v.begin(), v.end(), is_even); result != v.end())
        std::cout << "First even element in v: " << *result << '\n';
    else
        std::cout << "No even elements in v\n";
 
    if (auto result = ranges::find_if_not(v, is_even); result != v.end())
        std::cout << "First odd element in v: " << *result << '\n';
    else
        std::cout << "No odd elements in v\n";
 
    auto divides_13 = [](int x) { return x % 13 == 0; };
 
    if (auto result = ranges::find_if(v, divides_13); result != v.end())
        std::cout << "First element divisible by 13 in v: " << *result << '\n';
    else
        std::cout << "No elements in v are divisible by 13\n";
 
    if (auto result = ranges::find_if_not(v.begin(), v.end(), divides_13);
        result != v.end())
        std::cout << "First element indivisible by 13 in v: " << *result << '\n';
    else
        std::cout << "All elements in v are divisible by 13\n";
 
    std::vector<std::complex<double>> nums{{4, 2}};
    #ifdef __cpp_lib_algorithm_default_value_type
        // T gets deduced in (2) making list-initialization possible
        const auto it = ranges::find(nums, {4, 2});
    #else
        const auto it = ranges::find(nums, std::complex<double>{4, 2});
    #endif
    assert(it == nums.begin());
}
```

## See also
- [ranges::adjacent_find](/cpp/algorithm/ranges/adjacent_find/)
- [ranges::find_end](/cpp/algorithm/ranges/find_end/)
- [ranges::find_first_of](/cpp/algorithm/ranges/find_first_of/)
- [ranges::mismatch](/cpp/algorithm/ranges/mismatch/)
- [ranges::search](/cpp/algorithm/ranges/search/)
- [findfind_iffind_if_not](/cpp/algorithm/find/)
