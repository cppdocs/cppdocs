---
title: "Declarations"
source_path: "c/language/declarations"
category: "c"
---

A declaration is a C language construct that introduces one or more [identifiers](/c/language/identifier/) into the program and specifies their meaning and properties.

## Notes
In C89, declarations within any [compound statement](/c/language/statements/#Compound_statements) (block scope) must appear in the beginning of the block, before any [statements](/c/language/statements/).

Also, in C89, functions returning int may be implicitly declared by the [function call operator](/c/language/operator_other/#Function_call) and function parameters of type int do not have to be declared when using old-style [function definitions](/c/language/function_definition/).

Empty declarators are prohibited; a simple declaration must have at least one declarator or declare at least one struct/union/enum tag, or introduce at least one enumeration constant.

If any part of a declarator is a [variable-length array](/c/language/array/) (VLA) declarator, the entire declarator's type is known as "variably-modified type". Types defined from variably-modified types are also variably modified (VM).

Declarations of any variably-modified types may appear only at [block scope](/c/language/scope/) or function prototype scope and cannot be members of structs or unions. Although VLA can only have automatic or allocated [storage duration](/c/language/storage_duration/), a VM type such as a pointer to a VLA may be static. There are other restrictions on the use of VM types, see [goto](/c/language/goto/), [switch](/c/language/switch/). [longjmp](/c/program/longjmp/)

[static_asserts](/c/language/static_assert/) are considered to be declarations from the point of view of the C grammar (so that they may appear anywhere a declaration may appear), but they do not introduce any identifiers and do not follow the declaration syntax.

[Attribute](/c/language/attributes/) declarations are also considered to be declarations (so that they may appear anywhere a declaration may appear), but they do not introduce any identifiers. A single ; without attr-spec-seq is not an attribute declaration, but a statement.

## See also
- [C++ documentation](/cpp/language/declarations/)
