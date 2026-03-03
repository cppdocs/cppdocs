---
title: "std::ostreambuf_iterator"
source_path: "cpp/iterator/ostreambuf_iterator"
header: "<iterator>"
---

std::ostreambuf_iterator is a single-pass [LegacyOutputIterator](/cpp/named_req/OutputIterator/) that writes successive characters into the [std::basic_streambuf](/cpp/io/basic_streambuf/) object for which it was constructed. The actual write operation is performed when the iterator (whether dereferenced or not) is assigned to. Incrementing the std::ostreambuf_iterator is a no-op.

## Declarations
```cpp
template< class CharT, class Traits = std::char_traits<CharT> >
class ostreambuf_iterator
: public std::iterator<std::output_iterator_tag, void, void, void, void>
```
_(until C++17)_

```cpp
template< class CharT, class Traits = std::char_traits<CharT> >
class ostreambuf_iterator;
```
_(since C++17)_

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string s = "This is an example\n";
    std::copy(s.begin(), s.end(), std::ostreambuf_iterator<char>(std::cout));
}
```

## See also
- [istreambuf_iterator](/cpp/iterator/istreambuf_iterator/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
- [ostream_iterator](/cpp/iterator/ostream_iterator/)
- [std::basic_ostream](/cpp/io/basic_ostream/)
