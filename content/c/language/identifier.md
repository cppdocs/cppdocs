---
title: "Identifier"
source_path: "c/language/identifier"
category: "c"
---

An identifier is an arbitrarily long sequence of digits, underscores, lowercase and uppercase Latin letters, and Unicode characters specified using \u and \U [escape](/c/language/escape/) notation(since C99), of class [XID_Continue](https://www.unicode.org/reports/tr31/#Table_Lexical_Classes_for_Identifiers)(since C23). A valid identifier must begin with a non-digit character (Latin letter, underscore, or Unicode non-digit character(since C99)(until C23), or Unicode character of class [XID_Start](https://www.unicode.org/reports/tr31/#Table_Lexical_Classes_for_Identifiers))(since C23)). Identifiers are case-sensitive (lowercase and uppercase letters are distinct). Every identifier must conform to [Normalization Form C](https://www.unicode.org/charts/normalization/).(since C23)

## See also
- [C++ documentation](/cpp/language/name/)
