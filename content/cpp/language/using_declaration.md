---
title: "Using-declaration"
source_path: "cpp/language/using_declaration"
category: "language"
---

Introduces a name that is defined elsewhere into the declarative region where this using-declaration appears. See [using enum](/cpp/language/enum/#Using-enum-declaration) and(since C++20)[using namespace](/cpp/language/namespace/#Using-directives) for other related declarations.

## Notes
Only the name explicitly mentioned in the using-declaration is transferred into the declarative scope: in particular, enumerators are not transferred when the enumeration type name is using-declared.

A using-declaration cannot refer to a namespace, to a scoped enumerator(until C++20), to a destructor of a base class or to a specialization of a member template for a user-defined conversion function.

A using-declaration cannot name a member template specialization ([template-id](/cpp/language/templates/#template-id) is not permitted by the grammar):

A using-declaration also can't be used to introduce the name of a dependent member template as a template-name (the template disambiguator for [dependent names](/cpp/language/dependent_name/) is not permitted).

If a using-declaration brings the base class assignment operator into derived class, whose signature happens to match the derived class's copy-assignment or move-assignment operator, that operator is hidden by the implicitly-declared copy/move assignment operator of the derived class. Same applies to a using-declaration that inherits a base class constructor that happens to match the derived class copy/move constructor(since C++11).

The semantics of inheriting constructors were retroactively changed by a [defect report against C++11](#Defect_reports). Previously, an inheriting constructor declaration caused a set of synthesized constructor declarations to be injected into the derived class, which caused redundant argument copies/moves, had problematic interactions with some forms of SFINAE, and in some cases can be unimplementable on major ABIs. Older compilers may still implement the previous semantics.

If the using-declaration refers to a constructor of a direct base of the class being defined (e.g. using Base::Base;), constructors of that base class are inherited, according to the following rules:

The inherited constructors are equivalent to user-defined constructors with an empty body and with a [member initializer list](/cpp/language/initializer_list/) consisting of a single nested-name-specifier, which forwards all of its arguments to the base class constructor.

It has the same [access](/cpp/language/access/) as the corresponding base constructor. It is constexpr if the user-defined constructor would have satisfied constexpr constructor requirements. It is deleted if the corresponding base constructor is deleted or if a defaulted default constructor would be deleted (except that the construction of the base whose constructor is being inherited doesn't count). An inheriting constructor cannot be explicitly instantiated or explicitly specialized.

If two using-declarations inherit the constructor with the same signature (from two direct base classes), the program is ill-formed.

An inheriting constructor template should not be [explicitly instantiated](/cpp/language/function_template/#Explicit_instantiation) or [explicitly specialized](/cpp/language/template_specialization/).

[Pack expansions](/cpp/language/parameter_pack/) in using-declarations make it possible to form a class that exposes overloaded members of variadic bases without recursion:

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 258 | C++98 | a non-const member function of a derived class canoverride and/or hide a const member function of its base | overriding and hiding also requirecv-qualifications to be the same |
| CWG 1738 | C++11 | it was not clear whether it is permitted toexplicitly instantiate or explicitly specializespecializations of inheriting constructor templates | prohibited |
| CWG 2504 | C++11 | the behavior of inheriting constructorsfrom virtual base classes was unclear | made clear |
| P0136R1 | C++11 | inheriting constructor declaration injectsadditional constructors in the derived class | causes base class constructorsto be found by name lookup |
