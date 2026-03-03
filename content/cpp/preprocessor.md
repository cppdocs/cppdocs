---
title: "Preprocessor"
source_path: "cpp/preprocessor"
category: "preprocessor"
---

The preprocessor is executed at [translation phase 4](/cpp/language/translation_phases/#Phase_4), before the compilation. The result of preprocessing is a single file which is then passed to the actual compiler.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2001 | C++98 | the behavior of using non-standard-defined directives was not clear | made conditionally-supported |

## See also
- [C++ documentation](/cpp/preprocessor/replace/#Predefined_macros)
- [C++ documentation](/cpp/symbol_index/macro/)
- [C documentation](/c/preprocessor/)
