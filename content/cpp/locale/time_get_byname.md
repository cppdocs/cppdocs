---
title: "std::time_get_byname"
source_path: "cpp/locale/time_get_byname"
header: "<locale>"
category: "locale"
---

std::time_get_byname is a [std::time_get](/cpp/locale/time_get/) facet which encapsulates time and date parsing rules of the locale specified at its construction.

## Declarations
```cpp
template<
class CharT,
class InputIt = std::istreambuf_iterator<CharT>
> class time_get_byname : public std::time_get<CharT, InputIt>
```

## Parameters
- `name`: the name of the locale
- `refs`: the number of references that link to the facet

## Example
This section is incompleteReason: no example

## See also
- [time_get](/cpp/locale/time_get/)
- [std::tm](/cpp/chrono/c/tm/)
- [get_time](/cpp/io/manip/get_time/)
