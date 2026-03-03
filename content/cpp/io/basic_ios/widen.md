---
title: "std::basic_ios<CharT,Traits>::widen"
source_path: "cpp/io/basic_ios/widen"
category: "io"
---

Converts a character c to its equivalent in the current locale. The result is converted from char to character type used within the stream if needed.

## Declarations
```cpp
char_type widen( char c ) const;
```

## Parameters
- `c`: character to convert

## Return value
Character converted to char_type

## See also
- [narrow](/cpp/io/basic_ios/narrow/)
- [do_widen](/cpp/locale/ctype/widen/)
- [btowc](/cpp/string/multibyte/btowc/)
