---
title: "C++ named requirements: EmplaceConstructible (since C++11)"
source_path: "cpp/named_req/EmplaceConstructible"
category: "named_req"
since: "C++11"
---

Specifies that an object of the type can be constructed from a given set of arguments in uninitialized storage by a given allocator.

## Notes
Although it is required that customized construct is used when constructing elements of [std::basic_string](/cpp/string/basic_string/) until C++23, all implementations only used the default mechanism. The requirement is corrected by [P1072R10](https://wg21.link/P1072R10) to match existing practice.

## See also
- [CopyInsertable](/cpp/named_req/copyinsertable/)
- [MoveInsertable](/cpp/named_req/moveinsertable/)
