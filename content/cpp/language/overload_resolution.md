---
title: "Overload resolution"
source_path: "cpp/language/overload_resolution"
category: "language"
---

In order to compile a function call, the compiler must first perform [name lookup](/cpp/language/lookup/), which, for functions, may involve [argument-dependent lookup](/cpp/language/adl/), and for function templates may be followed by [template argument deduction](/cpp/language/template_argument_deduction/).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1 | C++98 | the behavior was unspecified when the samefunction with possibly different defaultarguments (from different scopes) is selected | the program is ill-formed in this case |
| CWG 83 | C++98 | the conversion sequence from a string literalto char* was better than that to const char*even though the former is deprecated | the rank of the deprecatedconversion is lowered (itwas removed in C++11) |
| CWG 162 | C++98 | it was invalid if the overload set named by F containsa non-static member function in the case of &F(args) | only invalid if overloadresolution selects a non-staticmember function in this case |
| CWG 233 | C++98 | references and pointers were handled insonsistently inoverloading resolution with user defined conversions | they are handledconsistently |
| CWG 280 | C++98 | surrogate call functions were not added tothe set of candidate functions for conversionfunctions declared in inaccessible base classes | removed the accessibilityconstraint, the program isill-formed if a surrogate callfunction is selected and thecorresponding conversionfunction cannot be called |
| CWG 415 | C++98 | when a function template is selected as acandidate, its specializations were instantiatedusing template argument deduction | no instantiation will occurin this case, their declarationswill be synthesized |
| CWG 495 | C++98 | when the implicit conversions for arguments are equallygood, a non-template conversion function was alwaysbetter than a conversion function template, even if thelatter may have a better standard conversion sequence | standard conversionsequences are comparedbefore specialization levels |
| CWG 1307 | C++11 | overload resolution based on size of arrays was not specified | a shorter array isbetter when possible |
| CWG 1328 | C++11 | the determination of the candidate functions whenbinding a reference to a conversion result was not clear | made clear |
| CWG 1374 | C++98 | qualification conversion was checked before referencebinding when comparing standard conversion sequences | reversed |
| CWG 1385 | C++11 | a non-explicit user-defined conversion function declared witha ref-qualifier did not have a corresponding surrogate function | it has a correspondingsurrogate function |
| CWG 1467 | C++11 | same-type list-initialization ofaggregates and arrays was omitted | initialization defined |
| CWG 1601 | C++11 | conversion from enum to its underlying typedid not prefer the fixed underlying type | fixed type is preferredto what it promotes to |
| CWG 1608 | C++98 | the set of member candidates of a unary operator @whose argument has type T1 was empty ifT1 is a class currently being defined | the set is the result ofqualified name lookup ofT1::operator@ in this case |
| CWG 1687 | C++98 | when a built-in candidate is selected by overload resolution,the operands would undergo conversion without restriction | only convert class type operands,and disabled the secondstandard conversion sequence |
| CWG 2052 | C++98 | ill-formed synthesized function template specializations couldbe added to the candidate set, making the program ill-formed | they are not addedto the candidate set |
| CWG 2076 | C++11 | user-defined conversion is applied to the single initializerin a nested initializer list during list-initializationdue to the resolution of CWG issue 1467 | not applied |
| CWG 2137 | C++11 | initializer list constructors lost to copyconstructors when list-initializing X from {X} | non-aggregates considerinitializer lists first |
| CWG 2273 | C++11 | there was no tiebreaker betweeninherited and non-inherited constructors | non-inherited constructor wins |
| CWG 2673 | C++20 | built-in candidates with the same parameterlist as a rewritten non-member candidatewere added to the list of built-in candidates | not added |
| CWG 2712 | C++98 | when a built-in assignment operator is considered,the first parameter could not bound to atemporary, which is already impossible[1] | removed theredundant requirement |
| CWG 2713 | C++20 | the conversion restriction regarding designated initializerlists was applied even if the parameter is a reference | not restricted in this case |
| CWG 2789 | C++23 | the explicit object paramaeter was includedwhen comparing parameter-type-lists | excluded |
| CWG 2856 | C++11 | the overload resolution for default-initialization in the contextof copy-list-initialization only considered converting constructor | considers all constructors |
| CWG 2919 | C++98 | the candidate set of reference initialization by conversiondepended on the target type of the initialization | depends on the targettype of the conversion |
| P2468R2 | C++20 | rewritten candidates based on operator== are addedfor a != b even if a matching operator!= exists | not added |

## See also
- [Name lookup](/cpp/language/lookup/)
- [Argument-dependent lookup](/cpp/language/adl/)
- [Template argument deduction](/cpp/language/template_argument_deduction/)
- [SFINAE](/cpp/language/sfinae/)
