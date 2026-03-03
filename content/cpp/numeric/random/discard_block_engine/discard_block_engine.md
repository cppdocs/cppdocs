---
title: "std::discard_block_engine<Engine,P,R>::discard_block_engine"
source_path: "cpp/numeric/random/discard_block_engine/discard_block_engine"
category: "numeric"
since: "C++11"
---

Constructs new pseudo-random engine adaptor.

## Declarations
```cpp
discard_block_engine();
```
_(since C++11)_

```cpp
explicit discard_block_engine( result_type s );
```
_(since C++11)_

```cpp
template< class SeedSeq >
explicit discard_block_engine( SeedSeq& seq );
```
_(since C++11)_

```cpp
explicit discard_block_engine( const Engine& e );
```
_(since C++11)_

```cpp
explicit discard_block_engine( Engine&& e );
```
_(since C++11)_

## Parameters
- `s`: integer value to construct the underlying engine with
- `seq`: seed sequence to construct the underlying engine with
- `e`: pseudo-random number engine to initialize with

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2181 | C++11 | overload (3) would not throw even if the seq.generate call throws | propagates the exception |
