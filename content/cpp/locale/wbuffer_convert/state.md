---
title: "std::wbuffer_convert<Codecvt,Elem,Tr>::state"
source_path: "cpp/locale/wbuffer_convert/state"
category: "locale"
---

Returns the current value of the conversion state, which is stored in this wbuffer_convert object. The conversion state may be explicitly set in the constructor and is updated by all conversion operations.

## Declarations
```cpp
state_type state() const;
```

## Return value
[cvtstate](/cpp/locale/wbuffer_convert/#cvtstate)

## Example
This section is incompleteReason: no example

## See also
- [state](/cpp/locale/wstring_convert/state/)
- [mbsinit](/cpp/string/multibyte/mbsinit/)
- [std::mbstate_t](/cpp/string/multibyte/mbstate_t/)
