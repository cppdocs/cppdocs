---
title: "std::match_results<BidirIt,Alloc>::operator="
source_path: "cpp/regex/match_results/operator"
header: "<regex>"
category: "regex"
---

Assigns the contents.

## Declarations
```cpp
match_results& operator=( const match_results& other );
```

```cpp
match_results& operator=( match_results&& other ) noexcept;
```

## Parameters
- `other`: another match results object

## Return value
*this

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2191 | C++11 | n could be negative in the postconditions | can only be non-negative |
