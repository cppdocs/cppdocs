---
title: "operator<<(std::experimental::basic_string_view)"
source_path: "cpp/experimental/basic_string_view/operator"
header: "<experimental/string_view>"
category: "experimental"
---

Equivalent to os << v.to_string().

## Declarations
```cpp
template <class CharT, class Traits>
std::basic_ostream<CharT, Traits>&
operator<<(std::basic_ostream<CharT, Traits>& os,
std::basic_string_view <CharT, Traits> v);
```
_(library fundamentals TS)_

## Parameters
- `os`: a character output stream
- `v`: the view to be inserted

## Return value
os
