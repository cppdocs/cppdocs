---
title: "std::experimental::ostream_joiner"
source_path: "cpp/experimental/ostream_joiner"
header: "<experimental/iterator>"
category: "experimental"
---

std::experimental::ostream_joiner is a single-pass [LegacyOutputIterator](/cpp/named_req/outputiterator/) that writes successive objects into the [std::basic_ostream](/cpp/io/basic_ostream/) object for which it was constructed, using operator<<, separated by a delimiter. The delimiter is written to the output stream between every two objects that are written. The write operation is performed when the iterator (whether dereferenced or not) is assigned to. Incrementing the ostream_joiner is a no-op.

## Declarations
```cpp
template<
class DelimT,
class CharT = char,
class Traits = std::char_traits<CharT>
>
class ostream_joiner;
```
_(library fundamentals TS v2)_

## Example
```cpp
#include <algorithm>
#include <experimental/iterator>
#include <iostream>
#include <iterator>
 
int main()
{
    int i[] = {1, 2, 3, 4, 5};
    std::copy(std::begin(i),
              std::end(i),
              std::experimental::make_ostream_joiner(std::cout, ", "));
}
```

## See also
- [ostreambuf_iterator](/cpp/iterator/ostreambuf_iterator/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
- [ostream_iterator](/cpp/iterator/ostream_iterator/)
- [std::basic_ostream](/cpp/io/basic_ostream/)
- [istream_iterator](/cpp/iterator/istream_iterator/)
- [std::basic_istream](/cpp/io/basic_istream/)
