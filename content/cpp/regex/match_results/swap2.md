---
title: "std::swap(std::match_results)"
source_path: "cpp/regex/match_results/swap2"
header: "<regex>"
category: "regex"
since: "C++11"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::match_results](/cpp/regex/match_results/). Exchanges the contents of x1 with those of x2. Effectively calls x1.swap(x2).

## Declarations
```cpp
template< class BidirIt, class Alloc >
void swap( match_results<BidirIt,Alloc>& x1,
match_results<BidirIt,Alloc>& x2 ) noexcept;
```
_(since C++11)_

## Parameters
- `x1, x2`: the match_results objects whose contents will be swapped

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/regex/match_results/swap/)
