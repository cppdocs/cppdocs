---
title: "std::philox_engine<UIntType,w,n,r,consts>::philox_engine"
source_path: "cpp/numeric/random/philox_engine/philox_engine"
category: "numeric"
since: "C++26"
---

Constructs the pseudo-random number engine.

## Declarations
```cpp
philox_engine() : philox_engine(default_seed) {}
```
_(since C++26)_

```cpp
explicit philox_engine( result_type value );
```
_(since C++26)_

```cpp
template< class SeedSeq >
explicit philox_engine( SeedSeq& seq );
```
_(since C++26)_

```cpp
philox_engine( const philox_engine& other );
```
_(since C++26) (implicitly declared)_

## Parameters
- `value`: seed value to use in the initialization of the internal state
- `seq`: seed sequence to use in the initialization of the internal state

## See also
- [seed](/cpp/numeric/random/philox_engine/seed/)
- [set_counter](/cpp/numeric/random/philox_engine/set_counter/)
