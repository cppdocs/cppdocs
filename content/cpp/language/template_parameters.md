---
title: "Template parameters and template arguments"
source_path: "cpp/language/template_parameters"
category: "language"
---

[1 Template parameters](#Template_parameters)
[1.1 Non-type template parameter](#Non-type_template_parameter)
[1.2 Type template parameter](#Type_template_parameter)
[1.3 Template template parameter](#Template_template_parameter)
[1.4 Name resolution for template parameters](#Name_resolution_for_template_parameters)

## Notes
In template parameters, type constraints could be used for both type and non-type parameters, depending on whether auto is present.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 150(P0522R0) | C++98 | template-template arguments had to match parameterlists of template-template parameters exactly | more specializedalso allowed |
| CWG 184 | C++98 | whether the template parameters of template templateparameters are allowed to have default arguments is unspecified | specification added |
| CWG 354 | C++98 | null pointer values could not be non-type template arguments | allowed |
| CWG 1398 | C++11 | template non-type arguments could not have type std::nullptr_t | allowed |
| CWG 1570 | C++98 | template non-type arguments could designate addresses of subobjects | not allowed |
| CWG 1922 | C++98 | it was unclear whether a class template whose name is aninjected-class-name can use the default arguments in prior declarations | allowed |
| CWG 2032 | C++14 | for variable templates, there was no restriction on the templateparameters after a template parameter with a default argument | apply the same restrictionas on class templatesand alias templates |
| CWG 2542 | C++20 | it was unclear whether the closure type is structural | it is not structural |
| CWG 2845 | C++20 | the closure type was not structural | it is structuralif capture-less |
| P2308R1 | C++11C++20 | 1. list-initialization was not allowed for non-type template arguments (C++11)2. it was unclear how non-type template parameters of class types are initialized (C++20) | 1. allowed2. made clear |
