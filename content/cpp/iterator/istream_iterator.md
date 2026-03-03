---
title: "std::istream_iterator"
source_path: "cpp/iterator/istream_iterator"
header: "<iterator>"
category: "iterator"
since: "C++17"
---

std::istream_iterator is a single-pass input iterator that reads successive objects of type T from the [std::basic_istream](/cpp/io/basic_istream/) object for which it was constructed, by calling the appropriate operator>>. The actual read operation is performed when the iterator is incremented, not when it is dereferenced. The first object is read when the iterator is constructed. Dereferencing only returns a copy of the most recently read object.

## Declarations
```cpp
template< class T,
class CharT = char,
class Traits = std::char_traits<CharT>,
class Distance = std::ptrdiff_t >
class istream_iterator
: public std::iterator<std::input_iterator_tag, T, Distance, const T*, const T&>
```
_(until C++17)_

```cpp
template< class T,
class CharT = char,
class Traits = std::char_traits<CharT>,
class Distance = std::ptrdiff_t >
class istream_iterator;
```
_(since C++17)_

## Notes
When reading characters, std::istream_iterator skips whitespace by default (unless disabled with [std::noskipws](/cpp/io/manip/skipws/) or equivalent), while [std::istreambuf_iterator](/cpp/iterator/istreambuf_iterator/) does not. In addition, [std::istreambuf_iterator](/cpp/iterator/istreambuf_iterator/) is more efficient, since it avoids the overhead of constructing and destructing the sentry object once per character.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <numeric>
#include <sstream>
 
int main()
{
    std::istringstream str("0.1 0.2 0.3 0.4");
    std::partial_sum(std::istream_iterator<double>(str),
                     std::istream_iterator<double>(),
                     std::ostream_iterator<double>(std::cout, " "));
 
    std::istringstream str2("1 3 5 7 8 9 10");
    auto it = std::find_if(std::istream_iterator<int>(str2),
                           std::istream_iterator<int>(),
                           [](int i){ return i % 2 == 0; });
 
    if (it != std::istream_iterator<int>())
        std::cout << "\nThe first even number is " << *it << ".\n";
    //" 9 10" left in the stream
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0738R2 | C++98 | the first read might be deferred to the first dereference | always performed in the constructor |

## See also
- [ostream_iterator](/cpp/iterator/ostream_iterator/)
- [std::basic_ostream](/cpp/io/basic_ostream/)
- [istreambuf_iterator](/cpp/iterator/istreambuf_iterator/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
