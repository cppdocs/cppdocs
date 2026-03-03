---
title: "Standard format specification (since C++20)"
source_path: "cpp/utility/format/spec"
category: "utility"
since: "C++20"
---

For basic types and string types, the format specification is based on the [format specification in Python](https://docs.python.org/3/library/string.html#formatspec).

## Notes
In most of the cases the syntax is similar to the old %-formatting, with the addition of the {} and with : used instead of %. For example, "%03.2f" can be translated to "{:03.2f}".

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3721 | C++20 | zero is not allowed for the width fieldin standard format specification | zero is permitted if specifiedvia a replacement field |
| P2909R4 | C++20 | char or wchar_t might be formatted asout-of-range unsigned integer values | code units are converted to the correspondingunsigned type before such formatting |
