---
title: "operator==(std::philox_engine)"
source_path: "cpp/numeric/random/philox_engine/operator_cmp"
category: "numeric"
since: "C++26"
---

Compares two pseudo-random number engines. Two engines are equal, if their internal states are equivalent, that is, if they would generate equivalent values for any number of calls of operator().

## Declarations
```cpp
friend bool operator==( const philox_engine& lhs, const philox_engine& rhs );
```
_(since C++26)_

## Parameters
- `lhs, rhs`: engines to compare

## Return value
true if the engines are equal, false otherwise.
