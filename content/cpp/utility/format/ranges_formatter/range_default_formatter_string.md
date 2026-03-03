---
title: "std::range-default-formatter<std::range_format::string>, std::range-default-formatter<std::range_format::debug_string>"
source_path: "cpp/utility/format/ranges_formatter/range_default_formatter_string"
header: "<format>"
category: "utility"
---

The class template /*range-default-formatter*/ for range types is specialized for formatting range as a string or an escaped string if [std::format_kind](/cpp/utility/format/format_kind/)<R> is either std::range_format::string or std::range_format::debug_string.

## Declarations
```cpp
template< std::range_format K, ranges::input_range R, class CharT >
requires (K == std::range_format::string || K == std::range_format::debug_string)
struct /*range-default-formatter*/<K, R, CharT>;
```
_(since C++23) (exposition only*)_

## See also
- [formatter](/cpp/utility/format/formatter/)
- [range_formatter](/cpp/utility/format/range_formatter/)
- [std::formatter](/cpp/utility/format/formatter/)
