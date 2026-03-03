---
title: "C++ named requirements: TrivialType (since C++11)(deprecated in C++26)"
source_path: "cpp/named_req/TrivialType"
category: "named_req"
since: "C++11"
deprecated: "C++26"
---

Specifies that a type is a trivial type.

## Notes
A trivial class may have a private or protected trivial default constructor, in which case an attempt to default-construct such a class object in contexts unrelated to the class makes the program ill-formed.

## See also
- [is_trivial](/cpp/types/is_trivial/)
