---
title: "std::regex_token_iterator<BidirIt,CharT,Traits>::operator*, operator->"
source_path: "cpp/regex/regex_token_iterator/operator"
category: "regex"
since: "C++11"
---

Returns a pointer or reference to the current match.

## Declarations
```cpp
const value_type& operator*() const;
```
_(since C++11)_

```cpp
const value_type* operator->() const;
```
_(since C++11)_

## Return value
The behavior is undefined if the iterator is end-of-sequence iterator.
