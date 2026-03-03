---
title: "Explicit (full) template specialization"
source_path: "cpp/language/template_specialization"
category: "language"
---

Allows customizing the template code for a given set of template arguments.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 531 | C++98 | the syntax of defining members of explicitspecializations in namespace scope was not specified | specified |
| CWG 727 | C++98 | partial and full specializations not allowed inclass scope | allowed in any scope |
| CWG 730 | C++98 | member templates of non-templateclasses could not be fully specialized | allowed |
| CWG 2478 | C++20 | it was unclear whether the constinit and consteval of theprimary template are carried over into its explicit specializations | not carried over |
| CWG 2604 | C++11 | it was unclear whether the attributes of the primarytemplate are carried over into its explicit specializations | not carried over |

## See also
- [templates](/cpp/language/templates/)
- [class template](/cpp/language/class_template/)
- [function template](/cpp/language/function_template/)
- [partial specialization](/cpp/language/partial_specialization/)
