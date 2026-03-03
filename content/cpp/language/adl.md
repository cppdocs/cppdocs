---
title: "Argument-dependent lookup"
source_path: "cpp/language/adl"
category: "language"
---

Argument-dependent lookup (ADL), also known as Koenig lookup[[1]](#cite_note-1), is the set of rules for looking up the unqualified function names in [function-call expressions](/cpp/language/operator_other/), including implicit function calls to [overloaded operators](/cpp/language/operators/). These function names are looked up in the namespaces of their arguments in addition to the scopes and namespaces considered by the usual [unqualified name lookup](/cpp/language/lookup/).

## Notes
Because of argument-dependent lookup, non-member functions and non-member operators defined in the same namespace as a class are considered part of the public interface of that class (if they are found through ADL) [[2]](#cite_note-2).

ADL is the reason behind the established idiom for swapping two objects in generic code:using [std::swap](/cpp/algorithm/swap/); swap(obj1, obj2); because calling [std::swap](/cpp/algorithm/swap/)(obj1, obj2) directly would not consider the user-defined swap() functions that could be defined in the same namespace as the types of obj1 or obj2, and just calling the unqualified swap(obj1, obj2) would call nothing if no user-defined overload was provided. In particular, [std::iter_swap](/cpp/algorithm/iter_swap/) and all other standard library algorithms use this approach when dealing with [Swappable](/cpp/named_req/swappable/) types.

Name lookup rules make it impractical to declare operators in global or user-defined namespace that operate on types from the std namespace, e.g. a custom operator>> or operator+ for [std::vector](/cpp/container/vector/) or for [std::pair](/cpp/utility/pair/) (unless the element types of the vector/pair are user-defined types, which would add their namespace to ADL). Such operators would not be looked up from template instantiations, such as the standard library algorithms. See [dependent names](/cpp/language/dependent_name/) for further details.

ADL can find a [friend function](/cpp/language/friend/) (typically, an overloaded operator) that is defined entirely within a class or class template, even if it was never declared at namespace level.

Although a function call can be resolved through ADL even if ordinary lookup finds nothing, a function call to a [function template](/cpp/language/function_template/) with explicitly-specified template arguments requires that there is a declaration of the template found by ordinary lookup (otherwise, it is a syntax error to encounter an unknown name followed by a less-than character).

In the following contexts ADL-only lookup (that is, lookup in associated namespaces only) takes place:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 33 | C++98 | the associated namespaces or classes are unspecifiedif an argument used for lookup is the address of agroup of overloaded functions or a function template | specified |
| CWG 90 | C++98 | the associated classes of a nested non-union classdid not include its enclosing class, but a nestedunion was associated with its enclosing class | non-unions also associated |
| CWG 239 | C++98 | a block-scope function declaration found in the ordinaryunqualified lookup did not prevent ADL from happening | ADL not considered exceptfor using declarations |
| CWG 997 | C++98 | dependent parameter types and return types wereexcluded from consideration in determining the associatedclasses and namespaces of a function template | included |
| CWG 1690 | C++98C++11 | ADL could not find lambdas (C++11) or objectsof local class types (C++98) that are returned | they can be found |
| CWG 1691 | C++11 | ADL had surprising behaviors for opaque enumeration declarations | fixed |
| CWG 1692 | C++98 | doubly-nested classes did not have associated namespaces(their enclosing classes are not members of any namespace) | associated namespaces areextended to the innermostenclosing namespaces |
| CWG 2857 | C++98 | the associated classes of an incompleteclass type included its base classes | not included |

## See also
- [Name lookup](/cpp/language/lookup/)
- [Template argument deduction](/cpp/language/function_template/)
- [Overload resolution](/cpp/language/overload_resolution/)
