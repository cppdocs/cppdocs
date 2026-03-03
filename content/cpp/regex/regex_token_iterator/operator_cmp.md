---
title: "std::regex_token_iterator<BidirIt,CharT,Traits>::operator==, operator!="
source_path: "cpp/regex/regex_token_iterator/operator_cmp"
category: "regex"
since: "C++11"
---

Checks whether *this and other are equivalent.

## Declarations
```cpp
bool operator==( const regex_token_iterator& other ) const;
```
_(since C++11)_

```cpp
bool operator!=( const regex_token_iterator& other ) const;
```
_(since C++11) (until C++20)_

## Parameters
- `other`: another regex token iterator to compare to
