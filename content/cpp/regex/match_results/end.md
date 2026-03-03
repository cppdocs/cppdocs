---
title: "std::match_results<BidirIt,Alloc>::end, std::match_results<BidirIt,Alloc>::cend"
source_path: "cpp/regex/match_results/end"
category: "regex"
since: "C++11"
---

Returns an iterator to the end of the list of sub-matches.

## Declarations
```cpp
iterator end() noexcept;
```
_(since C++11)_

```cpp
const_iterator end() const noexcept;
```
_(since C++11)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the element past the last sub-match.

## See also
- [begincbegin](/cpp/regex/match_results/begin/)
