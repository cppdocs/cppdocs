---
title: "std::ostream_iterator"
source_path: "cpp/iterator/ostream_iterator"
header: "<iterator>"
category: "iterator"
since: "C++17"
---

std::ostream_iterator is a single-pass [LegacyOutputIterator](/cpp/named_req/outputiterator/) that writes successive objects of type T into the [std::basic_ostream](/cpp/io/basic_ostream/) object for which it was constructed, using operator<<. Optional delimiter string is written to the output stream after every write operation. The write operation is performed when the iterator (whether dereferenced or not) is assigned to. Incrementing the std::ostream_iterator is a no-op.

## Declarations
```cpp
template< class T,
class CharT = char,
class Traits = std::char_traits<CharT> >
class ostream_iterator
: public std::iterator<std::output_iterator_tag, void, void, void, void>
```
_(until C++17)_

```cpp
template< class T,
class CharT = char,
class Traits = std::char_traits<CharT> >
class ostream_iterator;
```
_(since C++17)_

## Example
```cpp
#include <iostream>
#include <iterator>
#include <numeric>
#include <sstream>
 
int main()
{
    std::istringstream str("0.11 0.22 0.33 0.44");
 
    std::partial_sum(std::istream_iterator<double>(str),
                     std::istream_iterator<double>(),
                     std::ostream_iterator<double>(std::cout, ", "));
    std::cout << '\n';
}
```

## See also
- [ostreambuf_iterator](/cpp/iterator/ostreambuf_iterator/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
- [istream_iterator](/cpp/iterator/istream_iterator/)
- [std::basic_istream](/cpp/io/basic_istream/)
- [std::experimental::ostream_joiner](/cpp/experimental/ostream_joiner/)
