---
title: "std::discard_block_engine<Engine,P,R>::seed"
source_path: "cpp/numeric/random/discard_block_engine/seed"
category: "numeric"
since: "C++11"
---

Reinitializes the internal state of the underlying engine using a new seed value.

## Declarations
```cpp
void seed();
```
_(since C++11)_

```cpp
void seed( result_type value );
```
_(since C++11)_

```cpp
template< class SeedSeq >
void seed( SeedSeq& seq );
```
_(since C++11)_

## Parameters
- `value`: seed value to use in the initialization of the internal state of the underlying engine
- `seq`: seed sequence to use in the initialization of the internal state of the underlying engine

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2181 | C++11 | overload (3) would not throw even if the seq.generate call throws | propagates the exception |
