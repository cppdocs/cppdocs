---
title: "std::subtract_with_carry_engine<UIntType,w,s,r>::discard"
source_path: "cpp/numeric/random/subtract_with_carry_engine/discard"
category: "numeric"
---

Advances the internal state by z times.

## Declarations
```cpp
void discard( unsigned long long z );
```

## Parameters
- `z`: integer value specifying the number of times to advance the state by

## Notes
This function can use “fast jump” algorithms which advance the state by many steps (order of millions) without calculating intermediate state transitions can be used instead of naive loops that calls [operator()](/cpp/numeric/random/subtract_with_carry_engine/operator/) z times and discarding the result.

## See also
- [operator()](/cpp/numeric/random/subtract_with_carry_engine/operator/)
