---
title: "std::mersenne_twister_engine"
source_path: "cpp/numeric/random/mersenne_twister_engine"
header: "<random>"
category: "numeric"
since: "C++11"
---

mersenne_twister_engine is a random number engine based on [Mersenne Twister](https://en.wikipedia.org/wiki/Mersenne_Twister) algorithm. It produces high quality, but not cryptographically secure, unsigned integer random numbers of type UIntType on the interval \(\scriptsize {[0,2^w)}\)[0, 2w).

## Declarations
```cpp
template<
class UIntType, std::size_t w, std::size_t n, std::size_t m, std::size_t r,
UIntType a, std::size_t u, UIntType d, std::size_t s,
UIntType b, std::size_t t, UIntType c, std::size_t l, UIntType f
> class mersenne_twister_engine;
```
_(since C++11)_

## Example
This section is incompleteReason: no example
