---
title: "C++ named requirements: Destructible"
source_path: "cpp/named_req/Destructible"
category: "named_req"
---

Specifies that an instance of the type can be destructed.

## Notes
Destructors are called implicitly at the end of [object lifetime](/cpp/language/lifetime/) such as when leaving [scope](/cpp/language/scope/) or by the [delete-expression](/cpp/language/delete/). Explicit destructor call as shown in the type requirement table is rare.

Thanks to [pseudo destructor call](/cpp/language/operator_member_access/#Built-in_member_access_operators), all scalar types meet the requirement of Destructible, while array types and reference types do not. Note that [std::is_destructible](/cpp/types/is_destructible/) allows arrays and reference types.

## See also
- [is_destructibleis_trivially_destructibleis_nothrow_destructible](/cpp/types/is_destructible/)
- [destructible](/cpp/concepts/destructible/)
