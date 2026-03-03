---
title: "std::ranges::replace, std::ranges::replace_if"
source_path: "cpp/algorithm/ranges/replace"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Replaces all elements satisfying specific criteria with new_value in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T1, class T2, class Proj = std::identity >
requires std::indirectly_writable<I, const T2&> &&
std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T1*>
constexpr I replace( I first, S last, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T1 = std::projected_value_t<I, Proj>, class T2 = T1 >
requires std::indirectly_writable<I, const T2&> &&
std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T1*>
constexpr I replace( I first, S last, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R,
class T1, class T2, class Proj = std::identity >
requires std::indirectly_writable<ranges::iterator_t<R>, const T2&> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T1*>
constexpr ranges::borrowed_iterator_t<R>
replace( R&& r, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::input_range R,
class Proj = std::identity,
class T1 = std::projected_value_t<ranges::iterator_t<R>, Proj>,
class T2 = T1 >
requires std::indirectly_writable<ranges::iterator_t<R>, const T2&> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T1*>
constexpr ranges::borrowed_iterator_t<R>
replace( R&& r, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T, class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::indirectly_writable<I, const T&>
constexpr I replace_if( I first, S last, Pred pred,
const T& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class Proj = std::identity,
class T = std::projected_value_t<I, Proj>,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::indirectly_writable<I, const T&>
constexpr I replace_if( I first, S last, Pred pred,
const T& new_value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R, class T, class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::indirectly_writable<ranges::iterator_t<R>, const T&>
constexpr ranges::borrowed_iterator_t<R>
replace_if( R&& r, Pred pred, const T& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::input_range R, class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj>,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::indirectly_writable<ranges::iterator_t<R>, const T&>
constexpr ranges::borrowed_iterator_t<R>
replace_if( R&& r, Pred pred, const T& new_value, Proj proj = {} );
```
_(since C++26)_

## Parameters
- `first, last`: the range of elements to process
- `r`: the range of elements to process
- `old_value`: the value of elements to replace
- `new_value`: the value to use as a replacement
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements

## Return value
An iterator equal to last.

## Notes
Because the algorithm takes old_value and new_value by reference, it may have unexpected behavior if either is a reference to an element of the range [first,last).

## Example
```cpp
#include <algorithm>
#include <array>
#include <complex>
#include <iostream>
 
void println(const auto& v)
{
    for (const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    namespace ranges = std::ranges;
 
    std::array p{1, 6, 1, 6, 1, 6};
    println(p);
    ranges::replace(p, 6, 9);
    println(p);
 
    std::array q{1, 2, 3, 6, 7, 8, 4, 5};
    println(q);
    ranges::replace_if(q, [](int x) { return 5 < x; }, 5);
    println(q);
 
    std::array<std::complex<double>, 2> nums{{{1, 3}, {1, 3}}};
    println(nums);
    #ifdef __cpp_lib_algorithm_default_value_type
        ranges::replace(nums, {1, 3}, {4, 2});
    #else
        ranges::replace(nums, std::complex<double>{1, 3}, std::complex<double>{4, 2});
    #endif
    println(nums);
}
```

## See also
- [ranges::replace_copyranges::replace_copy_if](/cpp/algorithm/ranges/replace_copy/)
- [replacereplace_if](/cpp/algorithm/replace/)
