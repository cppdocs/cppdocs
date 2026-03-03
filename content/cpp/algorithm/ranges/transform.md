---
title: "std::ranges::transform, std::ranges::unary_transform_result, std::ranges::binary_transform_result"
source_path: "cpp/algorithm/ranges/transform"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Applies the given function to a range and stores the result in another range, beginning at result.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S, std::weakly_incrementable O,
std::copy_constructible F, class Proj = std::identity >
requires std::indirectly_writable<O,
std::indirect_result_t<F&, std::projected<I, Proj>>>
constexpr unary_transform_result<I, O>
transform( I first1, S last1, O result, F op, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R, std::weakly_incrementable O,
std::copy_constructible F, class Proj = std::identity >
requires std::indirectly_writable<O,
std::indirect_result_t<F&, std::projected<ranges::iterator_t<R>, Proj>>>
constexpr unary_transform_result<ranges::borrowed_iterator_t<R>, O>
transform( R&& r, O result, F op, Proj proj = {} );
```
_(since C++20)_

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2,
std::weakly_incrementable O,
std::copy_constructible F,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_writable<O,
std::indirect_result_t<F&,
std::projected<I1, Proj1>,
std::projected<I2, Proj2>>>
constexpr binary_transform_result<I1, I2, O>
transform( I1 first1, S1 last1, I2 first2, S2 last2, O result,
F binary_op, Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1,
ranges::input_range R2,
std::weakly_incrementable O,
std::copy_constructible F,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::indirectly_writable<O,
std::indirect_result_t<F&,
std::projected<ranges::iterator_t<R1>, Proj1>,
std::projected<ranges::iterator_t<R2>, Proj2>>>
constexpr binary_transform_result<ranges::borrowed_iterator_t<R1>,
ranges::borrowed_iterator_t<R2>, O>
transform( R1&& r1, R2&& r2, O result, F binary_op,
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using unary_transform_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

```cpp
template< class I1, class I2, class O >
using binary_transform_result = ranges::in_in_out_result<I1, I2, O>;
```
_(since C++20)_

## Parameters
- `first1, last1`: the first range of elements to transform
- `r, r1`: the first range of elements to transform
- `first2, last2`: the second range of elements to transform
- `r2`: the second range of elements to transform
- `result`: the beginning of the destination range, may be equal to first1 or first2
- `op, binary_op`: operation to apply to the projected element(s)
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Notes
ranges::transform does not guarantee in-order application of op or binary_op. To apply a function to a sequence in-order or to apply a function that modifies the elements of a sequence, use [ranges::for_each](/cpp/algorithm/ranges/for_each/).

## Example
```cpp
#include <algorithm>
#include <cctype>
#include <functional>
#include <iostream>
#include <string>
#include <vector>
 
int main()
{
    std::string s{"hello"};
    auto op = [](unsigned char c) -> unsigned char { return std::toupper(c); };
 
    namespace ranges = std::ranges;
 
    // uppercase the string in-place
    ranges::transform(s.begin(), s.end(), s.begin(), op );
 
    std::vector<std::size_t> ordinals;
    // convert each char to size_t
    ranges::transform(s, std::back_inserter(ordinals),
                      [](unsigned char c) -> std::size_t { return c; });
 
    std::cout << s << ':';
    for (auto ord : ordinals)
        std::cout << ' ' << ord;
 
    // double each ordinal
    ranges::transform(ordinals, ordinals, ordinals.begin(), std::plus {});
 
    std::cout << '\n';
    for (auto ord : ordinals)
        std::cout << ord << ' ';
    std::cout << '\n';
 
    struct Foo
    {
        char bar;
    };
    const std::vector<Foo> f = {{'h'},{'e'},{'l'},{'l'},{'o'}};
    std::string result;
    // project, then uppercase
    ranges::transform(f, std::back_inserter(result), op, &Foo::bar);
    std::cout << result << '\n';
}
```

## See also
- [ranges::for_each](/cpp/algorithm/ranges/for_each/)
- [ranges::transform_viewviews::transform](/cpp/ranges/transform_view/)
- [view](/cpp/ranges/view/)
- [transform](/cpp/algorithm/transform/)
