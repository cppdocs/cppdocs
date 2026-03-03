---
title: "operator==,!=(std::shuffle_order_engine)"
source_path: "cpp/numeric/random/shuffle_order_engine/operator_cmp"
category: "numeric"
since: "C++11"
---

Compares two pseudo-random number engine adaptors. Two engine adaptors are equal, if their underlying engines are equal and their internal state (if any) is equal, that is, if they would generate equivalent values for any number of calls of operator().

## Declarations
```cpp
friend bool operator==( const shuffle_order_engine& lhs,
const shuffle_order_engine& rhs );
```
_(since C++11)_

```cpp
friend bool operator!=( const shuffle_order_engine& lhs,
const shuffle_order_engine& rhs );
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs`: engine adaptors to compare

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3519 | C++11 | the form of equality operators were unspecified | specified to be hidden friends |
