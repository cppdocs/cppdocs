---
title: "Dependent names"
source_path: "cpp/language/dependent_name"
category: "language"
---

Inside the definition of a [template](/cpp/language/templates/) (both [class template](/cpp/language/class_template/) and [function template](/cpp/language/function_template/)), the meaning of some constructs may differ from one instantiation to another. In particular, types and expressions may depend on types of type template parameters and values of non-type template parameters.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 206 | C++98 | it was unspecified at what point semantic constraints areapplied when a type used in a non-dependent name isincomplete at the point at which a template is defined but iscomplete at the point at which an instantiation is performed | the program is ill-formedand no diagnostic isrequired in this case |
| CWG 224 | C++98 | the definition of dependent types was basedon the form of the name rather than lookup | definition revamped |
| CWG 382 | C++98 | the typename disambiguator was only allowed in template scope | also allowed outsideof templates |
| CWG 468 | C++98 | the template disambiguator was only allowed in template scope | also allowed outsideof templates |
| CWG 502 | C++98 | it was unspecified whether nested enumerations are dependent | dependent as nested classes |
| CWG 1047 | C++98 | typeid expressions were never value-dependent | value-dependent if theoperand is type-dependent |
| CWG 1160 | C++98 | it was unspecified whether a name refers to the current instantiationwhen a template-id matching a primary template or partialspecialization appears in the definition of a member of the template | specified |
| CWG 1413 | C++98 | uninitialized static data member, static member function, and addressof member of a class template were not listed as value-dependent | listed |
| CWG 1471 | C++98 | a nested type of a non-dependent base ofthe current instantiation was dependent | it is not dependent |
| CWG 1850 | C++98 | the list of cases that meaning may change between thedefinition context and the point of instantiation was incomplete | made complete |
| CWG 1929 | C++98 | it was not clear whether the template disambiguator canfollow a :: where the name to its left refers to a namespace | allowed |
| CWG 2066 | C++98 | this was never value-dependent | it may bevalue-dependent |
| CWG 2100 | C++98 | address of a static data member of classtemplate was not listed as value-dependent | listed |
| CWG 2109 | C++98 | type-dependent identifier expressions might not be value-dependent | they are alwaysvalue-dependent |
| CWG 2276 | C++98 | a function type whose exception specificationis value-dependent was not a dependent type | it is |
| CWG 2307 | C++98 | a parenthesized non-type template parameter used as atemplate argument was equivalent to that template parameter | not equivalent anymore |
| CWG 2457 | C++11 | a function type with function parameterpack was not a dependent type | it is |
| CWG 2785 | C++20 | requires expressions might be type-dependent | they are nevertype-dependent |
| CWG 2905 | C++11 | a noexcept expression was only value-dependentif its operand is value-dependent | it is value-dependentif its operand involvesa template parameter |
| CWG 2936 | C++98 | the names of local classes of templatedfunctions were not part of the current instantiation | they are |
