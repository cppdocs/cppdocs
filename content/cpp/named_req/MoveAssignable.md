---
title: "C++ named requirements: MoveAssignable (since C++11)"
source_path: "cpp/named_req/MoveAssignable"
category: "named_req"
since: "C++11"
---

Specifies that an instance of the type can be assigned from an [rvalue](/cpp/language/value_category/) argument.

## Notes
The type does not have to implement [move assignment operator](/cpp/language/move_operator/) in order to satisfy this type requirement: a [copy assignment operator](/cpp/language/as_operator/) that takes its parameter by value or as a const Type&, will bind to rvalue argument.

If a MoveAssignable class implements a move assignment operator, it may also implement [move semantics](/cpp/utility/move/) to take advantage of the fact that the value of rv after assignment is unspecified.

## See also
- [is_move_assignableis_trivially_move_assignableis_nothrow_move_assignable](/cpp/types/is_move_assignable/)
- [assignable_from](/cpp/concepts/assignable_from/)
