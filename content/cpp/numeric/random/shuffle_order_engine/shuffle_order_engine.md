---
title: "std::shuffle_order_engine<Engine,K>::shuffle_order_engine"
source_path: "cpp/numeric/random/shuffle_order_engine/shuffle_order_engine"
category: "numeric"
since: "C++11"
---

Constructs new pseudo-random engine adaptor.

## Declarations
```cpp
shuffle_order_engine();
```
_(since C++11)_

```cpp
explicit shuffle_order_engine( result_type s );
```
_(since C++11)_

```cpp
template< class SeedSeq >
explicit shuffle_order_engine( SeedSeq& seq );
```
_(since C++11)_

```cpp
explicit shuffle_order_engine( const Engine& e );
```
_(since C++11)_

```cpp
explicit shuffle_order_engine( Engine&& e );
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
