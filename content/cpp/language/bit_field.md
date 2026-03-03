---
title: "Bit-field"
source_path: "cpp/language/bit_field"
category: "language"
---

Declares a class data member with explicit size, in bits. Adjacent bit-field members may (or may not) be packed to share and straddle the individual bytes.

## Notes
The following properties of bit-fields are implementation-defined:

In the C programming language, the width of a bit-field cannot exceed the width of the underlying type, and whether int bit-fields that are not explicitly signed or unsigned are signed or unsigned is implementation-defined. For example, int b : 3; may have the range of values [0,7] or [-4,3] in C, but only the latter choice is allowed in C++.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 324 | C++98 | it was unspecified whether the return valueof an assignment to a bit-field is a bit-field | added bit-field specifications foroperators which may return lvalues |
| CWG 739 | C++98 | signedness of bit-fields that are neither declaredsigned nor unsigned were implementation-defined | consistent with underlying types |
| CWG 2229 | C++98 | unnamed bit-fields could be declared with a cv-qualified type | prohibited |
| CWG 2511 | C++98 | cv-qualifications were not allowed in bit-field types | bit-fields can have cv-qualifiedenumeration types |

## See also
- [bitset](/cpp/utility/bitset/)
- [vector<bool>](/cpp/container/vector_bool/)
- [Bit manipulation](/cpp/utility/bit/)
- [C documentation](/c/language/bit_field/)
