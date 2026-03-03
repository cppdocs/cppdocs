---
title: "std::linear_congruential_engine<UIntType,a,c,m>::linear_congruential_engine"
source_path: "cpp/numeric/random/linear_congruential_engine/linear_congruential_engine"
category: "numeric"
since: "C++11"
---

Constructs the pseudo-random number engine.

## Declarations
```cpp
linear_congruential_engine() : linear_congruential_engine(default_seed) {}
```
_(since C++11)_

```cpp
explicit linear_congruential_engine( result_type value );
```
_(since C++11)_

```cpp
template< class SeedSeq >
explicit linear_congruential_engine( SeedSeq& seq );
```
_(since C++11)_

```cpp
linear_congruential_engine( const linear_congruential_engine& other );
```
_(since C++11) (implicitly declared)_

## Parameters
- `value`: seed value to use in the initialization of the internal state
- `seq`: seed sequence to use in the initialization of the internal state

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2181 | C++11 | overload (3) would not throw even if the seq.generate call throws | propagates the exception |
| P0935R0 | C++11 | the default constructor was explicit | made implicit |

## See also
- [seed](/cpp/numeric/random/linear_congruential_engine/seed/)
