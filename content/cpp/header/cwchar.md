---
title: "Standard library header <cwchar>"
source_path: "cpp/header/cwchar"
category: "header"
---

This header was originally in the C standard library as [<wchar.h>](/c/string/wide/).

## Notes
NULL is also defined in the following headers:
<cstddef>
<cstring>
<ctime>
<clocale>
<cstdio>
std::size_t is also defined in the following headers:
<cstddef>
<ctime>
<cstdio>
std::wint_t is also defined in the following headers:
<cwctype>
std::tm is also defined in the following headers:
<ctime>

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 345 | C++98 | std::tm was not provided in <cwchar> | provided |
