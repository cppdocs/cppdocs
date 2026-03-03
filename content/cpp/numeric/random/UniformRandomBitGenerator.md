---
title: "std::uniform_random_bit_generator"
source_path: "cpp/numeric/random/UniformRandomBitGenerator"
header: "<random>"
category: "numeric"
since: "C++20"
---

The concept uniform_random_bit_generator<G> specifies that G is the type of a uniform random bit generator, that is, objects of type G is a function object returning unsigned integer values such that each value in the range of possible results has (ideally) equal probability of being returned.

## Declarations
```cpp
template< class G >
concept uniform_random_bit_generator =
std::invocable<G&> && std::unsigned_integral<std::invoke_result_t<G&>> &&
requires {
{ G::min() } -> std::same_as<std::invoke_result_t<G&>>;
{ G::max() } -> std::same_as<std::invoke_result_t<G&>>;
requires std::bool_constant<(G::min() < G::max())>::value;
};
```
_(since C++20)_

## Notes
In order to satisfy the requirement [std::bool_constant](/cpp/types/integral_constant/)<(G::min() < G::max())>::value, both G::min() and G::max() must be constant expressions, and the result of the comparison must be true.
