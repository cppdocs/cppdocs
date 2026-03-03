---
title: "std::match_results<BidirIt,Alloc>::max_size"
source_path: "cpp/regex/match_results/max_size"
category: "regex"
since: "C++11"
---

Returns the maximum number of submatches the match_results type is able to hold due to system or library implementation limitations, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()) for the largest number of submatches.

## Declarations
```cpp
size_type max_size() const noexcept;
```
_(since C++11)_

## Return value
Maximum number of submatches.
