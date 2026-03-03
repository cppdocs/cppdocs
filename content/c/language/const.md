---
title: "const type qualifier"
source_path: "c/language/const"
category: "c"
---

Each individual type in the C [type system](/c/language/compatible_type/) has several qualified versions of that type, corresponding to one, two, or all three of the const, [volatile](/c/language/volatile/), and, for pointers to object types, [restrict](/c/language/restrict/) qualifiers. This page describes the effects of the const qualifier.

## Notes
C adopted the const qualifier from C++, but unlike in C++, expressions of const-qualified type in C are not [constant expressions](/c/language/constant_expression/); they may not be used as [case](/c/language/switch/) labels or to initialize [static](/c/language/static_storage_duration/) and [thread](/c/language/thread_storage_duration/) storage duration objects, [enumerators](/c/language/enum/), or [bit-field](/c/language/bit_field/) sizes. When they are used as [array](/c/language/array/) sizes, the resulting arrays are VLAs.

## See also
- [C++ documentation](/cpp/language/cv/)
