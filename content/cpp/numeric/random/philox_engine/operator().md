---
title: "std::philox_engine<UIntType,w,n,r,consts>::operator()"
source_path: "cpp/numeric/random/philox_engine/operator"
category: "numeric"
since: "C++26"
---

Advances the state of the engine, and generates a pseudo-random value from the new state.

## Declarations
```cpp
result_type operator()();
```
_(since C++26)_

## Return value
A pseudo-random number in [min(),max()].

## See also
- [discard](/cpp/numeric/random/philox_engine/discard/)
