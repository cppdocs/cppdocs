---
title: "std::range-default-formatter<std::range_format::set>"
source_path: "cpp/utility/format/ranges_formatter/range_default_formatter_set"
header: "<format>"
category: "utility"
---

The class template /*range-default-formatter*/ for range types is specialized for formatting range as a set of keys if [std::format_kind](/cpp/utility/format/format_kind/)<R> is std::range_format::set.

## Declarations
```cpp
template< ranges::input_range R, class CharT >
struct /*range-default-formatter*/<range_format::set, R, CharT>;
```
_(since C++23) (exposition only*)_

## See also
- [formatter](/cpp/utility/format/formatter/)
- [range_formatter](/cpp/utility/format/range_formatter/)
- [std::formatter](/cpp/utility/format/formatter/)
