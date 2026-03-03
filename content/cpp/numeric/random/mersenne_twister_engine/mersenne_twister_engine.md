---
title: "std::mersenne_twister_engine<UIntType,w,n,m,r,a,u,d,s,b,t,c,l,f>::mersenne_twister_engine"
source_path: "cpp/numeric/random/mersenne_twister_engine/mersenne_twister_engine"
category: "numeric"
since: "C++11"
---

Constructs the pseudo-random number engine.

## Declarations
```cpp
mersenne_twister_engine() : mersenne_twister_engine(default_seed) {}
```
_(since C++11)_

```cpp
explicit mersenne_twister_engine( result_type value );
```
_(since C++11)_

```cpp
template< class SeedSeq >
explicit mersenne_twister_engine( SeedSeq& seq );
```
_(since C++11)_

```cpp
mersenne_twister_engine( const mersenne_twister_engine& other );
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
    std::mt19937 gen32; // overload (1)
    std::mt19937_64 gen64; // overload (1)
    gen32.discard(10000 - 1);
    gen64.discard(10000 - 1);
    assert(gen32() == 4123659995);
    assert(gen64() == 9981545732273789042ull);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2181 | C++11 | overload (3) would not throw even if the seq.generate call throws | propagates the exception |
| P0935R0 | C++11 | the default constructor was explicit | made implicit |

## See also
- [seed](/cpp/numeric/random/mersenne_twister_engine/seed/)
