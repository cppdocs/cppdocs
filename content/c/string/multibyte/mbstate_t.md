---
title: "mbstate_t"
source_path: "c/string/multibyte/mbstate_t"
header: "<uchar.h>
(since C11)"
category: "c"
---

The type mbstate_t is a trivial non-array type that can represent any of the conversion states that can occur in an implementation-defined set of supported multibyte character encoding rules. Zero-initialized value of mbstate_t represents the initial conversion state, although other values of mbstate_t may exist that also represent the initial conversion state.

## Declarations
```cpp
struct mbstate_t;
```
_(since C95)_

## See also
- [mbsinit](/c/string/multibyte/mbsinit/)
- [C++ documentation](/cpp/string/multibyte/mbstate_t/)
