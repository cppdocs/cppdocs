---
title: "std::linear_congruential_engine<UIntType,a,c,m>::seed"
source_path: "cpp/numeric/random/linear_congruential_engine/seed"
category: "numeric"
since: "C++11"
---

Sets the [state](/cpp/numeric/random/linear_congruential_engine/#Generator_properties) of the random-number engine.

## Declarations
```cpp
void seed( result_type value = default_seed );
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

## See also
- [(constructor)](/cpp/numeric/random/linear_congruential_engine/linear_congruential_engine/)
