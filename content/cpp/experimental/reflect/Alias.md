---
title: "std::experimental::reflect::Alias"
source_path: "cpp/experimental/reflect/Alias"
header: "<experimental/reflect>"
category: "experimental"
---

The Alias [concept](/cpp/language/constraints/) is satisfied if and only if T reflects a [typedef declaration](/cpp/language/typedef/), an [alias-declaration](/cpp/language/type_alias/), a [namespace alias](/cpp/language/namespace_alias/), a [template type parameter](/cpp/language/template_parameters/), a [decltype-specifier](/cpp/language/decltype/), or a declaration introduced by [using-declaration](/cpp/language/using_declaration/) (Note: The Scope of an Alias is the scope that the alias was injected into).

## Declarations
```cpp
template< class T >
concept Alias = Named<T> && ScopedMember<T> && /* see below */;
```
_(reflection TS)_

## Example
This section is incompleteReason: examples
