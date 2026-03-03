---
title: "C++ named requirements: DefaultConstructible"
source_path: "cpp/named_req/DefaultConstructible"
category: "named_req"
---

Specifies that an instance of the type can be default constructed.

## Notes
For objects of non-aggregate class type, a public [default constructor](/cpp/language/default_constructor/) must be defined (either user-defined or implicitly defined) to satisfy DefaultConstructible.

Non-const objects of [non-class object type](/cpp/language/type-id/) are always DefaultConstructible.

Const non-class types are not DefaultConstructible.

Const aggregate types are not DefaultConstructible if any of their members is an object of non-class type.

Non-object types (function types, reference types, and the (possibly cv-qualified) type void) as well as the const non-object types are never DefaultConstructible.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 724 | C++98 | the requirements of DefaultConstructible were missing | added |
| LWG 2170 | C++98 | initialzing an object of a DefaultConstructible type with anempty initializer could only result in value-initialization | can also lead toaggregate-initialization |

## See also
- [is_default_constructibleis_trivially_default_constructibleis_nothrow_default_constructible](/cpp/types/is_default_constructible/)
- [default_initializable](/cpp/concepts/default_initializable/)
