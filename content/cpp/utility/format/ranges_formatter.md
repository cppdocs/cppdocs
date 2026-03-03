---
title: "std::formatter<range>"
source_path: "cpp/utility/format/ranges_formatter"
header: "<format>"
category: "utility"
since: "C++23"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for the range types allows users to convert a range to its textual representation as a collection of elements or a string using [formatting functions](/cpp/utility/format/).

## Declarations
```cpp
template< ranges::input_range R, class CharT >
requires (std::format_kind<R> != std::range_format::disabled) &&
std::formattable<ranges::range_reference_t<R>, CharT>
struct formatter<R, CharT>;
```
_(since C++23)_

```cpp
Helper templates
```

```cpp
template< std::range_format K, ranges::input_range R, class CharT >
struct /*range-default-formatter*/;
```
_(exposition only*)_

## Example
This section is incompleteReason: example

## See also
- [formatter](/cpp/utility/format/formatter/)
- [range_formatter](/cpp/utility/format/range_formatter/)
- [std::formatter](/cpp/utility/format/formatter/)
