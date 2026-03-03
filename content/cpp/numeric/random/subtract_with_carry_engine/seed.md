---
title: "std::subtract_with_carry_engine<UIntType,w,s,r>::seed"
source_path: "cpp/numeric/random/subtract_with_carry_engine/seed"
category: "numeric"
since: "C++11"
---

Sets the [state](/cpp/numeric/random/subtract_with_carry_engine/#Generator_properties) of the random-number engine.

## Declarations
```cpp
void seed( result_type value = 0u );
```
_(since C++11)_

```cpp
template< class SeedSeq >
void seed( SeedSeq& seq );
```
_(since C++11)_

## Parameters
- `value`: seed value to use to set the state
- `seq`: seed sequence to use to set the state

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2181 | C++11 | overload (2) would not throw even if the seq.generate call throws | propagates the exception |
| LWG 3809 | C++11 | the default argument of value was default_seed | changed to 0u |

## See also
- [(constructor)](/cpp/numeric/random/subtract_with_carry_engine/subtract_with_carry_engine/)
