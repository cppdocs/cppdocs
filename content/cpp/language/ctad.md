---
title: "Class template argument deduction (CTAD) (since C++17)"
source_path: "cpp/language/ctad"
category: "language"
since: "C++17"
---

In order to instantiate a [class template](/cpp/language/class_template/), every template argument must be known, but not every template argument has to be specified. In the following contexts the compiler will deduce the template arguments from the type of the initializer:

## Notes
Class template argument deduction is only performed if no template argument list is present. If a template argument list is specified, deduction does not take place.

Class template argument deduction of aggregates typically requires user-defined deduction guides:

User-defined deduction guides do not have to be templates:

Within the scope of a class template, the name of the template without a parameter list is an injected class name, and can be used as a type. In that case, class argument deduction does not happen and template parameters must be supplied explicitly:

In [overload resolution](/cpp/language/overload_resolution/#Best_viable_function), partial ordering takes precedence over whether a function template is generated from a user-defined deduction guide: if the function template generated from the constructor is more specialized than the one generated from the user-defined deduction guide, the one generated from the constructor is chosen. Because the copy deduction candidate is typically more specialized than a wrapping constructor, this rule means that copying is generally preferred over wrapping.

When earlier tiebreakers, including partial ordering, failed to distinguish between two candidate function templates, the following rules apply:

An rvalue reference to a cv-unqualified template parameter is not a [forwarding reference](/cpp/language/template_argument_deduction/) if that parameter is a class template parameter:

When initializing from a single argument of a type that is a specialization of the class template at issue, copying deduction is generally preferred over wrapping by default:

Outside the special case for copying vs. wrapping, the strong preference for initializer-list constructors in list-initialization remains intact.

Before class template argument deduction was introduced, a common approach to avoiding explicitly specifying arguments is to use a function template:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2376 | C++17 | CTAD would be performed even if the type of the variable declared isdifferent from the class template whose arguments will be deduced | do not performCTAD in this case |
| CWG 2628 | C++20 | implicit deduction guides did not propagate constraints | propogate constraints |
| CWG 2697 | C++20 | it was unclear whether the abbreviated function templatesyntax is allowed in user-defined deduction guides | prohibited |
| CWG 2707 | C++20 | deduction guides could not have a trailing requires clause | they can |
| CWG 2714 | C++17 | implicit deduction guides did not considerthe default aguments of constructors | consider them |
| CWG 2913 | C++20 | the resolution of CWG issue 2707 made the deduction guidesyntax inconsistent with the function declaration syntax | adjusted the syntax |
| P0702R1 | C++17 | an initializer-list constructor can pre-empt thecopy deduction candidate, resulting in wrapping | initializer-list phaseskipped when copying |
