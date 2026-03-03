---
title: "std::regex_traits<CharT>::transform_primary"
source_path: "cpp/regex/regex_traits/transform_primary"
category: "regex"
---

For the character sequence [first,last), obtains the primary sort key in the imbued locale's collating order, that is, the sort key that is based on the positions of the letters and collation units in the national alphabet, ignoring case, diacritics, variants, etc. If a primary sort key compares less than another primary sort key with operator<, then the character sequence that produced the first sort key comes before the character sequence that produced the second sort key, in the currently imbued locale's primary collation order.

## Declarations
```cpp
template< class ForwardIt >
string_type transform_primary( ForwardIt first, ForwardIt last ) const;
```

## Parameters
- `first, last`: a pair of iterators which determines the sequence of characters to compare

## Return value
The primary sort key for the character sequence [first,last) in the currently imbued locale, ignoring case, variant, diacritics, etc.

## Example
```cpp
#include <iostream>
#include <regex>
 
int main()
{
    std::locale::global(std::locale("en_US.UTF-8"));
    std::wstring str = L"AÀÁÂÃÄÅaàáâãäå";
    std::wregex re(L"[[=a=]]*", std::regex::basic);
    std::cout << std::boolalpha << std::regex_match(str, re) << '\n';
}
```
