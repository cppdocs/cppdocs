---
title: "std::mersenne_twister_engine<UIntType,w,n,m,r,a,u,d,s,b,t,c,l,f>::seed"
source_path: "cpp/numeric/random/mersenne_twister_engine/seed"
category: "numeric"
since: "C++11"
---

Sets the [state](/cpp/numeric/random/mersenne_twister_engine/#Generator_properties) of the random-number engine.

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

## Example
```cpp
#include <iostream>
#include <random>
 
int main()
{
    std::mt19937 gen;
 
    // Seed the engine with an unsigned int
    gen.seed(1);
    std::cout << "after seed by 1: " << gen() << '\n';
 
    // Seed the engine with two unsigned ints
    std::seed_seq sseq{1, 2};
    gen.seed(sseq);
    std::cout << "after seed by {1,2}: " << gen() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2181 | C++11 | overload (2) would not throw even if the seq.generate call throws | propagates the exception |

## See also
- [(constructor)](/cpp/numeric/random/mersenne_twister_engine/mersenne_twister_engine/)
