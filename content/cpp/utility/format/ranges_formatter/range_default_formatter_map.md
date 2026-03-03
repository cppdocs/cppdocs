---
title: "std::range-default-formatter<std::range_format::map>"
source_path: "cpp/utility/format/ranges_formatter/range_default_formatter_map"
header: "<format>"
category: "utility"
---

The class template /*range-default-formatter*/ for range types is specialized for formatting range as a map of keys to values if [std::format_kind](/cpp/utility/format/format_kind/)<R> is std::range_format::map.

## Declarations
```cpp
template< ranges::input_range R, class CharT >
struct /*range-default-formatter*/<range_format::map, R, CharT>;
```
_(since C++23) (exposition only*)_

## See also
- [formatter](/cpp/utility/format/formatter/)
- [range_formatter](/cpp/utility/format/range_formatter/)
- [std::formatter](/cpp/utility/format/formatter/)
