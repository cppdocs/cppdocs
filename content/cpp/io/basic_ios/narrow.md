---
title: "std::basic_ios<CharT,Traits>::narrow"
source_path: "cpp/io/basic_ios/narrow"
category: "io"
---

Converts a current locale-specific character c to its standard equivalent. The result is converted from char_type to char if needed. If no conversion can be performed, the function returns dfault.

## Declarations
```cpp
char narrow( char_type c, char dfault ) const;
```

## Parameters
- `c`: character to convert
- `dfault`: character to return if the conversion was unsuccessful

## Return value
Character converted to its standard equivalent and then to char. dfault is returned if the conversion fails.

## See also
- [widen](/cpp/io/basic_ios/widen/)
- [narrow](/cpp/locale/ctype/narrow/)
- [wctob](/cpp/string/multibyte/wctob/)
