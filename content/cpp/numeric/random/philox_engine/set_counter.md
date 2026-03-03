---
title: "std::philox_engine<UIntType,w,n,r,consts>::set_counter"
source_path: "cpp/numeric/random/philox_engine/set_counter"
category: "numeric"
since: "C++26"
---

Sets the [counter](/cpp/numeric/random/philox_engine/#Generator_properties) of the random-number engine.

## Declarations
```cpp
void set_counter( const std::array<result_type, n>& c );
```
_(since C++26)_

## Parameters
- `c`: counter sequence to use to set the counter

## See also
- [(constructor)](/cpp/numeric/random/philox_engine/philox_engine/)
- [seed](/cpp/numeric/random/philox_engine/seed/)
