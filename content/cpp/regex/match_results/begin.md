---
title: "std::match_results<BidirIt,Alloc>::begin, std::match_results<BidirIt,Alloc>::cbegin"
source_path: "cpp/regex/match_results/begin"
category: "regex"
since: "C++11"
---

Returns an iterator to the beginning of the list of sub-matches. If match was successful, the iterator will point to the entire matched expression.

## Declarations
```cpp
iterator begin() noexcept;
```
_(since C++11)_

```cpp
const_iterator begin() const noexcept;
```
_(since C++11)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11)_

## Return value
Iterator to the first sub-match.

## See also
- [endcend](/cpp/regex/match_results/end/)
