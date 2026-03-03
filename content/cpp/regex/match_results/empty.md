---
title: "std::match_results<BidirIt,Alloc>::empty"
source_path: "cpp/regex/match_results/empty"
category: "regex"
since: "C++11"
---

Checks whether the match was successful.

## Declarations
```cpp
bool empty() const;
```
_(since C++11)_

## Return value
true if *this represents the result of a failed match, false otherwise, i.e. size() == 0.

## See also
- [size](/cpp/regex/match_results/size/)
