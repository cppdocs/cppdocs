---
title: "std::experimental::ranges::UniformRandomNumberGenerator"
source_path: "cpp/experimental/ranges/concepts/UniformRandomNumberGenerator"
header: "<experimental/ranges/random>"
category: "experimental"
---

The concept UniformRandomNumberGenerator<G> specifies that G is the type of a uniform random number generator, that is, objects of type G is a function object returning unsigned integer values such that each value in the range of possible results has (ideally) equal probability of being returned.

## Declarations
```cpp
template< class G >
concept bool UniformRandomNumberGenerator =
Invocable<G&> &&
UnsignedIntegral<std::result_of_t<G&()>> &&
requires {
{ G::min() } -> Same<std::result_of_t<G&()>>&&;
{ G::max() } -> Same<std::result_of_t<G&()>>&&;
};
```
_(ranges TS)_
