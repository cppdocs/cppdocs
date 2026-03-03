---
title: "std::text_encoding::comp-name"
source_path: "cpp/text/text_encoding/comp-name"
category: "text"
---

Compares two strings a and b encoded in ordinary literal encoding following the [Unicode Charset Alias Matching](https://www.unicode.org/reports/tr22/tr22-8.html#Charset_Alias_Matching) rules.

## Declarations
```cpp
static constexpr bool /*comp-name*/( std::string_view a, std::string_view b );
```
_(since C++26) (exposition only*)_

## Parameters
- `a, b`: strings to compare

## Return value
true if two strings compare equal as described above; false otherwise.
