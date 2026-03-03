---
title: "std::regex_traits<CharT>::transform"
source_path: "cpp/regex/regex_traits/transform"
category: "regex"
---

Obtains the sort key for the character sequence [first,last), such that if a sort key compares less than another sort key with operator<, then the character sequence that produced the first sort key comes before the character sequence that produced the second sort key, in the currently imbued locale's collation order.

## Declarations
```cpp
template< class ForwardIt >
string_type transform( ForwardIt first, ForwardIt last) const;
```

## Parameters
- `first, last`: a pair of LegacyForwardIterators which determines the sequence of characters to compare

## Return value
The collation key for the character sequence [first,last) in the currently imbued locale.

## Example
This section is incompleteReason: no example
