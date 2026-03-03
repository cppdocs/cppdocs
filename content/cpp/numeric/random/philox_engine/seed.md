---
title: "std::philox_engine<UIntType,w,n,r,consts>::seed"
source_path: "cpp/numeric/random/philox_engine/seed"
category: "numeric"
since: "C++26"
---

Sets the [state](/cpp/numeric/random/philox_engine/#Generator_properties) of the random-number engine.

## Declarations
```cpp
void seed( result_type value = default_seed );
```
_(since C++26)_

```cpp
template< class SeedSeq >
void seed( SeedSeq& seq );
```
_(since C++26)_

## Parameters
- `value`: seed value to use to set the state
- `seq`: seed sequence to use to set the state

## See also
- [(constructor)](/cpp/numeric/random/philox_engine/philox_engine/)
- [set_counter](/cpp/numeric/random/philox_engine/set_counter/)
