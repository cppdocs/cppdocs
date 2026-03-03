---
title: "std::mbstate_t"
source_path: "cpp/string/multibyte/mbstate_t"
header: "<cuchar>
(since C++17)"
category: "string"
---

The type mbstate_t is a trivial non-array type that can represent any of the conversion states that can occur in an implementation-defined set of supported multibyte character encoding rules. Zero-initialized value of mbstate_t represents the initial conversion state, although other values of mbstate_t may exist that also represent the initial conversion state.

## Declarations
```cpp
struct mbstate_t;
```

## See also
- [mbsinit](/cpp/string/multibyte/mbsinit/)
- [C documentation](/c/string/multibyte/mbstate_t/)
