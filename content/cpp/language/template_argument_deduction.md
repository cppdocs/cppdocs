---
title: "Template argument deduction"
source_path: "cpp/language/template_argument_deduction"
category: "language"
---

In order to instantiate a [function template](/cpp/language/function_template/), every template argument must be known, but not every template argument has to be specified. When possible, the compiler will deduce the missing template arguments from the function arguments. This occurs when a function call is attempted, when an address of a function template is taken, and in some [other contexts](#Other_contexts):

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 70 | C++98 | whether array bounds would be deduced was not specified | specified as non-deduced |
| CWG 300 | C++98 | deduction took place for function parameters of formtype(*)(T)/T(*)()/T(*)(T), function pointersmatch these forms but function references do not | change these forms totype(T)/T()/T(T) so theycan also cover references |
| CWG 322 | C++98 | type parameters of reference types were notadjusted to use the referenced type for deduction | adjustment added |
| CWG 976 | C++98 | in the deduction for conversion operator templates,const T& return type could never match T result type | rules adjusted toallow such matches |
| CWG 1387 | C++11 | the expression of a decltype-specifier was not a non-deduced context | it is |
| CWG 1391 | C++98 | effect of implicit conversions of the argumentsthat aren't involved in deduction were not specified | specified as described above |
| CWG 1591 | C++11 | cannot deduce array bound and element type from a braced-init-list | deduction allowed |
| CWG 2052 | C++98 | deducing an operator with non-classnon-enum arguments was a hard error | soft error if thereare other overloads |
| CWG 2091 | C++98 | deducing a reference non-type parameter did notwork due to type mismatch against the argument | type mismatch avoided |
| N3922 | C++11 | direct-list-initialization of auto deduces std::initializer_list | ill-formed for more than oneelements, deduce elementtype for single element |
| CWG 2355 | C++17 | value in a noexcept specifier of a function type was not deducible | made deducible |
