---
title: "std::shuffle_order_engine<Engine,K>::discard"
source_path: "cpp/numeric/random/shuffle_order_engine/discard"
category: "numeric"
since: "C++11"
---

Advances the internal state by z times. Equivalent to calling [operator()](/cpp/numeric/random/shuffle_order_engine/operator/) z times and discarding the result. The state of the underlying engine may be advanced by more than z times.

## Declarations
```cpp
void discard( unsigned long long z );
```
_(since C++11)_

## Parameters
- `z`: integer value specifying the number of times to advance the state by

## Return value
(none)

## See also
- [operator()](/cpp/numeric/random/shuffle_order_engine/operator/)
