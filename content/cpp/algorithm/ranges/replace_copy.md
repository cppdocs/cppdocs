---
title: "std::ranges::replace_copy, std::ranges::replace_copy_if, std::ranges::replace_copy_result, std::ranges::replace_copy_if_result"
source_path: "cpp/algorithm/ranges/replace_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Copies the elements from the source range [first,last) to the destination range beginning at result, replacing all elements satisfying specific criteria with new_value. The behavior is undefined if the source and destination ranges overlap.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, class T1, class T2,
std::output_iterator<const T2&> O, class Proj = std::identity >
requires std::indirectly_copyable<I, O> &&
std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T1*>
constexpr replace_copy_result<I, O>
replace_copy( I first, S last, O result, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class O, class Proj = std::identity,
class T1 = std::projected_value_t<I, Proj>,
class T2 = std::iter_value_t<O> >
requires std::indirectly_copyable<I, O> &&
std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T1*> &&
std::output_iterator<O, const T2&>
constexpr replace_copy_result<I, O>
replace_copy( I first, S last, O result, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R, class T1, class T2,
std::output_iterator<const T2&> O, class Proj = std::identity >
requires std::indirectly_copyable<ranges::iterator_t<R>, O> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T1*>
constexpr replace_copy_result<ranges::borrowed_iterator_t<R>, O>
replace_copy( R&& r, O result, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::input_range R,
class O, class Proj = std::identity,
class T1 = std::projected_value_t<ranges::iterator_t<R>, Proj>,
class T2 = std::iter_value_t<O> >
requires std::indirectly_copyable<ranges::iterator_t<R>, O> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T1*> &&
std::output_iterator<O, const T2&>
constexpr replace_copy_result<ranges::borrowed_iterator_t<R>, O>
replace_copy( R&& r, O result, const T1& old_value,
const T2& new_value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class T, std::output_iterator<const T&> O,
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::indirectly_copyable<I, O>
constexpr replace_copy_if_result<I, O>
replace_copy_if( I first, S last, O result, Pred pred,
const T& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
class O, class T = std::iter_value_t<O>
class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::indirectly_copyable<I, O> && std::output_iterator<O, const T&>
constexpr replace_copy_if_result<I, O>
replace_copy_if( I first, S last, O result, Pred pred,
const T& new_value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R,
class T, std::output_iterator<const T&> O,
class Proj = std::identity,
std::indirect_unary_predicate
<std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::indirectly_copyable<ranges::iterator_t<R>, O>
constexpr replace_copy_if_result<ranges::borrowed_iterator_t<R>, O>
replace_copy_if( R&& r, O result, Pred pred,
const T& new_value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::input_range R,
class O, class T = std::iter_value_t<O>
class Proj = std::identity,
std::indirect_unary_predicate
<std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::indirectly_copyable<ranges::iterator_t<R>, O> &&
std::output_iterator<O, const T&>
constexpr replace_copy_if_result<ranges::borrowed_iterator_t<R>, O>
replace_copy_if( R&& r, O result, Pred pred,
const T& new_value, Proj proj = {} );
```
_(since C++26)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using replace_copy_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

```cpp
template< class I, class O >
using replace_copy_if_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to copy
- `r`: the range of elements to copy
- `result`: the beginning of the destination range
- `old_value`: the value of elements to replace
- `new_value`: the value to use as a replacement
- `pred`: predicate to apply to the projected elements
- `proj`: projection to apply to the elements.

## Return value
{last, result + N}, where

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
list-initialization for algorithms (1-4)

## Example
```cpp
#include <algorithm>
#include <array>
#include <complex>
#include <iostream>
#include <vector>
 
void println(const auto rem, const auto& v)
{
    for (std::cout << rem << ": "; const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{    
    std::vector<int> o;
 
    std::array p{1, 6, 1, 6, 1, 6};
    o.resize(p.size());
    println("p", p);
    std::ranges::replace_copy(p, o.begin(), 6, 9);
    println("o", o);
 
    std::array q{1, 2, 3, 6, 7, 8, 4, 5};
    o.resize(q.size());
    println("q", q);
    std::ranges::replace_copy_if(q, o.begin(), [](int x) { return 5 < x; }, 5);
    println("o", o);
 
    std::vector<std::complex<short>> r{{1, 3}, {2, 2}, {4, 8}};
    std::vector<std::complex<float>> s(r.size());
    println("r", r);
    #ifdef __cpp_lib_algorithm_default_value_type
        std::ranges::replace_copy(r, s.begin(),
                                  {1, 3}, // T1 gets deduced
                                  {2.2, 4.8}); // T2 gets deduced
    #else
        std::ranges::replace_copy(r, s.begin(),
                                  std::complex<short>{1, 3},
                                  std::complex<float>{2.2, 4.8});
    #endif
    println("s", s);
 
    std::vector<std::complex<double>> b{{1, 3}, {2, 2}, {4, 8}},
                                      d(b.size());
    println("b", b);
    #ifdef __cpp_lib_algorithm_default_value_type
        std::ranges::replace_copy_if(b, d.begin(),
            [](std::complex<double> z){ return std::abs(z) < 5; },
            {4, 2}); // Possible, since the T is deduced.
    #else
        std::ranges::replace_copy_if(b, d.begin(),
            [](std::complex<double> z){ return std::abs(z) < 5; },
            std::complex<double>{4, 2});
    #endif
    println("d", d);
}
```

## See also
- [ranges::replaceranges::replace_if](/cpp/algorithm/ranges/replace/)
- [replace_copyreplace_copy_if](/cpp/algorithm/replace_copy/)
