---
title: "C++ named requirements: MoveConstructible (since C++11)"
source_path: "cpp/named_req/MoveConstructible"
category: "named_req"
since: "C++11"
---

Specifies that an instance of the type can be constructed from an [rvalue](/cpp/language/value_category/) argument.

## Notes
A class does not have to implement a [move constructor](/cpp/language/move_constructor/) to satisfy this type requirement: a [copy constructor](/cpp/language/copy_constructor/) that takes a const T& argument can bind rvalue expressions.

If a MoveConstructible class implements a move constructor, it may also implement [move semantics](/cpp/utility/move/) to take advantage of the fact that the value of rv after construction is unspecified.

Being a MoveConstructible class implies [std::is_move_constructible](/cpp/types/is_move_constructible/) but not vice versa since [std::is_move_constructible](/cpp/types/is_move_constructible/) will only check for the ability to call the constructor with the correct arguments, not a post-condition value.

Output:

## See also
- [is_move_constructibleis_trivially_move_constructibleis_nothrow_move_constructible](/cpp/types/is_move_constructible/)
- [move_constructible](/cpp/concepts/move_constructible/)
