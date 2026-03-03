---
title: "std::ranges::remove_copy, std::ranges::remove_copy_if, std::ranges::remove_copy_result, std::ranges::remove_copy_if_result"
source_path: "cpp/algorithm/ranges/remove_copy"
header: "<algorithm>"
category: "algorithm"
since: "C++26"
---

Copies elements from the source range [first,last), to the destination range beginning at result, omitting the elements which (after being projected by proj) satisfy specific criteria. The behavior is undefined if the source and destination ranges overlap.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
std::weakly_incrementable O, class T, class Proj = std::identity >
requires std::indirectly_copyable<I, O> &&
std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr remove_copy_result<I, O>
remove_copy( I first, S last, O result, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
std::weakly_incrementable O, class Proj = std::identity,
class T = std::projected_value_t<I, Proj> >
requires std::indirectly_copyable<I, O> &&
std::indirect_binary_predicate
<ranges::equal_to, std::projected<I, Proj>, const T*>
constexpr remove_copy_result<I, O>
remove_copy( I first, S last, O result, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< ranges::input_range R,
std::weakly_incrementable O, class T, class Proj = std::identity >
requires std::indirectly_copyable<ranges::iterator_t<R>, O> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr remove_copy_result<ranges::borrowed_iterator_t<R>, O>
remove_copy( R&& r, O result, const T& value, Proj proj = {} );
```
_(since C++20) (until C++26)_

```cpp
template< ranges::input_range R,
std::weakly_incrementable O, class Proj = std::identity,
class T = std::projected_value_t<ranges::iterator_t<R>, Proj> >
requires std::indirectly_copyable<ranges::iterator_t<R>, O> &&
std::indirect_binary_predicate
<ranges::equal_to,
std::projected<ranges::iterator_t<R>, Proj>, const T*>
constexpr remove_copy_result<ranges::borrowed_iterator_t<R>, O>
remove_copy( R&& r, O result, const T& value, Proj proj = {} );
```
_(since C++26)_

```cpp
template< std::input_iterator I, std::sentinel_for<I> S,
std::weakly_incrementable O, class Proj = std::identity,
std::indirect_unary_predicate<std::projected<I, Proj>> Pred >
requires std::indirectly_copyable<I, O>
constexpr remove_copy_if_result<I, O>
remove_copy_if( I first, S last, O result, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R,
std::weakly_incrementable O, class Proj = std::identity,
std::indirect_unary_predicate<
std::projected<ranges::iterator_t<R>, Proj>> Pred >
requires std::indirectly_copyable<ranges::iterator_t<R>, O>
constexpr remove_copy_if_result<ranges::borrowed_iterator_t<R>, O>
remove_copy_if( R&& r, O result, Pred pred, Proj proj = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using remove_copy_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

```cpp
template< class I, class O >
using remove_copy_if_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first, last`: the source range of elements
- `r`: the source range of elements
- `result`: the beginning of the destination range
- `value`: the value of the elements not to copy
- `comp`: the binary predicate to compare the projected elements
- `proj`: the projection to apply to the elements

## Return value
{last, result + N}, where N is the number of elements copied.

## Notes
The algorithm is stable, i.e. preserves the relative order of the copied elements.

## Example
```cpp
#include <algorithm>
#include <array>
#include <complex>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string_view>
#include <vector>
 
void println(const auto rem, const auto& v)
{
    std::cout << rem << ' ';
    for (const auto& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    // Filter out the hash symbol from the given string.
    const std::string_view str{"#Small #Buffer #Optimization"};
    std::cout << "before: " << std::quoted(str) << '\n';
 
    std::cout << "after:  \"";
    std::ranges::remove_copy(str.begin(), str.end(),
                             std::ostream_iterator<char>(std::cout), '#');
    std::cout << "\"\n";
 
    // Copy only the complex numbers with positive imaginary part.
    using Ci = std::complex<int>;
    constexpr std::array<Ci, 5> source
    {
        Ci{1, 0}, Ci{0, 1}, Ci{2, -1}, Ci{3, 2}, Ci{4, -3}
    };
    std::vector<std::complex<int>> target;
 
    std::ranges::remove_copy_if
    (
        source,
        std::back_inserter(target),
        [](int imag) { return imag <= 0; },
        [](Ci z) { return z.imag(); }
    );
 
    println("source:", source);
    println("target:", target);
 
    std::vector<std::complex<float>> nums{{2, 2}, {1, 3}, {4, 8}, {1, 3}};
    std::vector<std::complex<double>> outs;
    #ifdef __cpp_lib_algorithm_default_value_type
        std::remove_copy(nums.cbegin(), nums.cend(), std::back_inserter(outs),
                         {1, 3}); // T gets deduced to std::complex<float>
    #else
        std::remove_copy(nums.cbegin(), nums.cend(), std::back_inserter(outs),
                         std::complex<float>{1, 3});
    #endif
    println("nums:  ", nums);
    println("outs:  ", outs);
}
```

## See also
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
- [ranges::copyranges::copy_if](/cpp/algorithm/ranges/copy/)
- [ranges::copy_n](/cpp/algorithm/ranges/copy_n/)
- [ranges::copy_backward](/cpp/algorithm/ranges/copy_backward/)
- [ranges::replace_copyranges::replace_copy_if](/cpp/algorithm/ranges/replace_copy/)
- [ranges::reverse_copy](/cpp/algorithm/ranges/reverse_copy/)
- [ranges::rotate_copy](/cpp/algorithm/ranges/rotate_copy/)
- [ranges::unique_copy](/cpp/algorithm/ranges/unique_copy/)
- [remove_copyremove_copy_if](/cpp/algorithm/remove_copy/)
