---
title: "Variable template (since C++14)"
source_path: "cpp/language/variable_template"
category: "language"
since: "C++14"
---

A variable template defines a family of variables or static data members.

## Notes
Until variable templates were introduced in C++14, parametrized variables were typically implemented as either static data members of class templates or as constexpr function templates returning the desired values.

Variable templates cannot be used as [template template arguments](/cpp/language/template_parameters/#Template_template_arguments).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2255 | C++14 | it was unclear whether a specialization of a staticdata member template is a static data member | it is |
