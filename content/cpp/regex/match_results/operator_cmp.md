---
title: "operator==,!=(std::match_results)"
source_path: "cpp/regex/match_results/operator_cmp"
header: "<regex>"
category: "regex"
since: "C++11"
---

Compares two match_results objects.

## Declarations
```cpp
template< class BidirIt, class Alloc >
bool operator==( match_results<BidirIt,Alloc>& lhs,
match_results<BidirIt,Alloc>& rhs );
```
_(since C++11)_

```cpp
template< class BidirIt, class Alloc >
bool operator!=( match_results<BidirIt,Alloc>& lhs,
match_results<BidirIt,Alloc>& rhs );
```
_(since C++11) (until C++20)_

## Parameters
- `lhs, rhs`: match results to compare

## Example
This section is incompleteReason: no example
