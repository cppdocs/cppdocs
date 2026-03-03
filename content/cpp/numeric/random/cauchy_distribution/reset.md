---
title: "std::cauchy_distribution<RealType>::reset"
source_path: "cpp/numeric/random/cauchy_distribution/reset"
category: "numeric"
since: "C++11"
---

Resets the internal state of the distribution object. After a call to this function, the next call to [operator()](/cpp/numeric/random/cauchy_distribution/operator/) on the distribution object will not be dependent on previous calls to [operator()](/cpp/numeric/random/cauchy_distribution/operator/).

## Declarations
```cpp
void reset();
```
_(since C++11)_

## Return value
(none)
