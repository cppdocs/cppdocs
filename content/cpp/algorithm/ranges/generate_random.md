---
title: "std::ranges::generate_random"
source_path: "cpp/algorithm/ranges/generate_random"
header: "<random>"
category: "algorithm"
since: "C++26"
---

Attempts to generate random numbers with the generate_random member function of the random number generator or the distribution, which is expected to be more efficient. Falls back to element-wise generation if no generate_random member function is available.

## Declarations
```cpp
Call signature
```

```cpp
template< class R, class G >
requires ranges::output_range<R, std::invoke_result_t<G&>> &&
std::uniform_random_bit_generator<std::remove_cvref_t<G>>
constexpr ranges::borrowed_iterator_t<R>
generate_random( R&& r, G&& g );
```
_(since C++26)_

```cpp
template< class G, std::output_iterator<std::invoke_result_t<G&>> O,
std::sentinel_for<O> S >
requires std::uniform_random_bit_generator<std::remove_cvref_t<G>>
constexpr O
generate_random( O first, S last, G&& g );
```
_(since C++26)_

```cpp
template< class R, class G, class D >
requires ranges::output_range<R, std::invoke_result_t<D&, G&>> &&
std::invocable<D&, G&> &&
std::uniform_random_bit_generator<std::remove_cvref_t<G>> &&
std::is_arithmetic_v<std::invoke_result_t<D&, G&>>
constexpr ranges::borrowed_iterator_t<R>
generate_random( R&& r, G&& g, D&& d );
```
_(since C++26)_

```cpp
template< class G, class D, std::output_iterator<std::invoke_result_t<D&, G&>> O,
std::sentinel_for<O> S >
requires std::invocable<D&, G&> &&
std::uniform_random_bit_generator<std::remove_cvref_t<G>> &&
std::is_arithmetic_v<std::invoke_result_t<D&, G&>>
constexpr O
generate_random( O first, S last, G&& g, D&& d );
```
_(since C++26)_

## Parameters
- `first, last`: iterator-sentinel pair that denotes the range to which random numbers are written
- `r`: range to which random numbers are written
- `g`: uniform random bit generator
- `d`: random number distribution object

## Notes
At the time of the standardization of std::ranges::generate_random, there is no random number generator or distribution in the standard library that provides a generate_random member function.

std::ranges::generate_random can be more efficient when used with a user-defined random number generator that wraps an underlying vectorized API.

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <random>
 
int main()
{
    std::default_random_engine eng;
    std::default_random_engine::result_type rs[16]{};
    std::ranges::generate_random(rs, eng);
 
    std::cout << std::left;
    for (int i{}; auto n : rs)
        std::cout << std::setw(11) << n << (++i % 4 ? ' ' : '\n');
}
```

## See also
- [ranges::generate](/cpp/algorithm/ranges/generate/)
- [uniform_random_bit_generator](/cpp/numeric/random/uniformrandombitgenerator/)
