---
title: "std::independent_bits_engine<Engine,W,UIntType>::operator()"
source_path: "cpp/numeric/random/independent_bits_engine/operator"
category: "numeric"
since: "C++11"
---

Generates a random value. The state of the underlying engine is advanced one or more times.

## Declarations
```cpp
result_type operator()();
```
_(since C++11)_

## Return value
A pseudo-random number in [min(), max()].

## See also
- [discard](/cpp/numeric/random/independent_bits_engine/discard/)
