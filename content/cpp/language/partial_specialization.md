---
title: "Partial template specialization"
source_path: "cpp/language/partial_specialization"
category: "language"
---

Allows customizing class and variable(since C++14) templates for a given category of template arguments.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 727 | C++98 | partial and full specializations not allowed inclass scope | allowed in any scope |
| CWG 1315 | C++98 | template parameter could not be used in non-typetemplate arguments other than id-expressions | expressions ok as long as deducible |
| CWG 1495 | C++11 | the specification was unclear when involving parameter pack | the specialization shall be more specialized |
| CWG 1711 | C++14 | missing specification of variable template partial specializations | add support for variable templates |
| CWG 1819 | C++98 | acceptable scopes for definition of partial specialization | make partial specialization can be declaredin the same scope with primary templates |
| CWG 2330 | C++14 | missing references to variable templates | add support for variable templates |

## See also
- [templates](/cpp/language/templates/)
- [class template](/cpp/language/class_template/)
- [function template](/cpp/language/function_template/)
- [full template specialization](/cpp/language/template_specialization/)
