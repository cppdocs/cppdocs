---
title: "std::formatter<std::priority_queue>"
source_path: "cpp/container/priority_queue/formatter"
header: "<queue>"
category: "container"
since: "C++23"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for the container adaptor type [std::priority_queue](/cpp/container/priority_queue/) allows users to convert the underlying container to its textual representation as a collection of elements using [formatting functions](/cpp/utility/format/).

## Declarations
```cpp
template< class CharT, class T, std::formattable<CharT> Container, class... U >
struct formatter<std::priority_queue<T, Container, U...>, CharT>;
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
