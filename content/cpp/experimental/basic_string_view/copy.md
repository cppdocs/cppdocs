---
title: "std::experimental::basic_string_view<CharT,Traits>::copy"
source_path: "cpp/experimental/basic_string_view/copy"
category: "experimental"
---

Copies the substring [pos, pos + rcount) to the character string pointed to by dest, where rcount is the smaller of count and size() - pos.

## Declarations
```cpp
size_type copy( CharT* dest,
size_type count,
size_type pos = 0) const;
```
_(library fundamentals TS)_

## Parameters
- `dest`: pointer to the destination character string
- `pos`: position of the first character
- `count`: requested substring length

## Return value
Number of characters copied

## See also
- [substr](/cpp/experimental/basic_string_view/substr/)
