---
title: "C++ named requirements: CopyConstructible"
source_path: "cpp/named_req/CopyConstructible"
category: "named_req"
---

Specifies that an instance of the type can be copy-constructed from an [lvalue expression](/cpp/language/value_category/).

## Notes
Until C++11, classes that overloaded operator& were not CopyConstructible and thus were not usable in the [standard library containers](/cpp/container/). This is a design decision in C++98 (instead of a defect, see [LWG issue 390](https://cplusplus.github.io/LWG/issue390)).

Since C++11, the standard library uses [std::addressof](/cpp/memory/addressof/) whenever the address of an object is needed.

Being a CopyConstructible class implies [std::is_copy_constructible](/cpp/types/is_copy_constructible/) but not vice versa since [std::is_copy_constructible](/cpp/types/is_copy_constructible/) will only check for the ability to call the constructor with the correct arguments, and, e.g., not a [MoveConstructible](/cpp/named_req/moveconstructible/) requirement.

## See also
- [is_copy_constructibleis_trivially_copy_constructibleis_nothrow_copy_constructible](/cpp/types/is_copy_constructible/)
- [copy_constructible](/cpp/concepts/copy_constructible/)
