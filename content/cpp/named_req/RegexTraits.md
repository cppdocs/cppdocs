---
title: "C++ named requirements: RegexTraits (since C++11)"
source_path: "cpp/named_req/RegexTraits"
category: "named_req"
since: "C++11"
---

RegexTraits is a traits class that abstracts operations needed for a given character type when as template type parameters for [std::basic_regex](/cpp/regex/basic_regex/).

## Declarations
```cpp
template<> class regex_traits<char>;
template<> class regex_traits<wchar_t>;
```
_(since C++11)(since C++11)_
