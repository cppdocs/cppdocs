---
title: "Typedef declaration"
source_path: "c/language/typedef"
category: "c"
---

The typedef declaration provides a way to declare an identifier as a type alias, to be used to replace a possibly complex [type name](/c/language/compatible_type/#Type_names)

## Notes
typedef name may be an [incomplete type](/c/language/compatible_type/#Incomplete_types), which may be completed as usual:

typedef declarations are often used to inject names from the tag [name space](/c/language/name_space/) into the ordinary name space:

They can even avoid using the tag name space at all:

Typedef names are also commonly used to simplify the syntax of complex declarations:

Libraries often expose system-dependent or configuration-dependent types as typedef names, to present a consistent interface to the users or to other library components:

## See also
- [C++ documentation](/cpp/language/typedef/)
