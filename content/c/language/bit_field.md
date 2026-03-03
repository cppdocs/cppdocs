---
title: "Bit-fields"
source_path: "c/language/bit_field"
category: "c"
---

Declares a member with explicit width, in bits. Adjacent bit-field members may be packed to share and straddle the individual bytes.

## Notes
The following usages of bit-fields causes undefined behavior:

The following properties of bit-fields are unspecified:

The following properties of bit-fields are implementation-defined:

Even though the number of bits in the object representation of _Bool is at least [CHAR_BIT](/c/types/limits/), the width of the bit-field of type _Bool cannot be greater than 1.

In the C++ programming language, the width of a bit-field can exceed the width of the underlying type (but the extra bits are padding bits), and bit-fields of type int are always signed.

## See also
- [C++ documentation](/cpp/language/bit_field/)
