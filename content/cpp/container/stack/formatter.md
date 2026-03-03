---
title: "std::formatter<std::stack>"
source_path: "cpp/container/stack/formatter"
header: "<stack>"
category: "container"
since: "C++23"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for the container adaptor type [std::stack](/cpp/container/stack/) allows users to convert the underlying container to its textual representation as a collection of elements using [formatting functions](/cpp/utility/format/).

## Declarations
```cpp
template< class CharT, class T, std::formattable<CharT> Container, class... U >
struct formatter<std::stack<T, Container, U...>, CharT>;
```
_(since C++23)_

## Return value
An iterator past the end of the range-format-spec of the underlying container.

## Example
This section is incompleteReason: no example

## See also
- [formatter](/cpp/utility/format/formatter/)
- [range_formatter](/cpp/utility/format/range_formatter/)
- [std::formatter](/cpp/utility/format/formatter/)
