---
title: "std::wstring_convert<Codecvt,Elem,Wide_alloc,Byte_alloc>::state"
source_path: "cpp/locale/wstring_convert/state"
header: "<locale>"
category: "locale"
---

Returns the current value of the conversion state, which is stored in this wstring_convert object. The conversion state may be explicitly set in the constructor and is updated by all conversion operations.

## Declarations
```cpp
state_type state() const;
```

## Return value
[cvtstate](/cpp/locale/wstring_convert/#cvtstate)

## Example
This section is incompleteReason: no example

## See also
- [to_bytes](/cpp/locale/wstring_convert/to_bytes/)
- [from_bytes](/cpp/locale/wstring_convert/from_bytes/)
- [mbsinit](/cpp/string/multibyte/mbsinit/)
- [std::mbstate_t](/cpp/string/multibyte/mbstate_t/)
