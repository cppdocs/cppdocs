---
title: "std::text_encoding::id"
source_path: "cpp/text/text_encoding/id"
header: "<text_encoding>"
category: "text"
since: "C++26"
---

The scoped enumeration std::text_encoding::id contains an enumerator for each known registered character encoding with their corresponding MIBenum value.

## Declarations
```cpp
enum class text_encoding::id : std::int_least32_t;
```
_(since C++26)_

## Notes
For each encoding, the corresponding enumerator is derived from the alias beginning with "cs", as follows:

## See also
- [id](/cpp/locale/locale/id/)
- [errc](/cpp/error/errc/)
- [std::error_condition](/cpp/error/error_condition/)
- [<cerrno>](/cpp/header/cerrno/)
