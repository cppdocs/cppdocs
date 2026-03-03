---
title: "std::subtract_with_carry_engine<UIntType,w,s,r>::subtract_with_carry_engine"
source_path: "cpp/numeric/random/subtract_with_carry_engine/subtract_with_carry_engine"
category: "numeric"
since: "C++11"
---

Constructs the pseudo-random number engine.

## Declarations
```cpp
subtract_with_carry_engine() : subtract_with_carry_engine(0u) {}
```
_(since C++11)_

```cpp
explicit subtract_with_carry_engine( result_type value );
```
_(since C++11)_

```cpp
template< class SeedSeq >
explicit subtract_with_carry_engine( SeedSeq& seq );
```
_(since C++11)_

```cpp
subtract_with_carry_engine( const subtract_with_carry_engine& other );
```
_(since C++11) (implicitly declared)_

## Parameters
- `value`: seed value to use in the initialization of the internal state
- `seq`: seed sequence to use in the initialization of the internal state

## Example
```cpp
#include <cassert>
#include <random>
 
int main()
{
    std::ranlux24_base gen24; // overload (1)
    std::ranlux48_base gen48; // overload (1)
    gen24.discard(10000 - 1);
    gen48.discard(10000 - 1);
    assert(gen24() == 7'937'952);
    assert(gen48() == 61'839'128'582'725);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2181 | C++11 | overload (3) would not throw even if the seq.generate call throws | propagates the exception |
| LWG 3809 | C++11 | e could not be constructed if result_type is std::uint16_t | can be constructed in this case |
| LWG 4014 | C++11 | the resolution of LWG issue 3809 caused the initial seedof the intermediate std::linear_congruential_engineto have a different type from the engine's result_type | truncates andconverts value |
| P0935R0 | C++11 | the default constructor was explicit | made implicit |

## See also
- [seed](/cpp/numeric/random/subtract_with_carry_engine/seed/)
