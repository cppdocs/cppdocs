---
title: "std::codecvt_base"
source_path: "cpp/locale/codecvt_base"
header: "<locale>"
category: "locale"
---

The class std::codecvt_base provides the conversion status constants which are inherited and used by the [std::codecvt](/cpp/locale/codecvt/) facets.

## Declarations
```cpp
class codecvt_base;
```

## Notes
The value std::codecvt_base::partial is used to indicate that either the destination range is too short to receive the results of the conversion or the input is truncated in the middle of an otherwise valid multibyte character.

## See also
- [codecvt](/cpp/locale/codecvt/)
