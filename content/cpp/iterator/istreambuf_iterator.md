---
title: "std::istreambuf_iterator"
source_path: "cpp/iterator/istreambuf_iterator"
header: "<iterator>"
category: "iterator"
since: "C++17"
---

std::istreambuf_iterator is a single-pass input iterator that reads successive characters from the [std::basic_streambuf](/cpp/io/basic_streambuf/) object for which it was constructed.

## Declarations
```cpp
template< class CharT, class Traits = std::char_traits<CharT> >
class istreambuf_iterator
: public std::iterator<std::input_iterator_tag,
CharT, typename Traits::off_type,
/* unspecified */, CharT>
```
_(until C++17)_

```cpp
template< class CharT, class Traits = std::char_traits<CharT> >
class istreambuf_iterator;
```
_(since C++17)_

## Notes
The resolution of [LWG issue 659](https://cplusplus.github.io/LWG/issue659) introduced operator->. It is expected that given an std::istreambuf_iterator i, the expressions (*i).m and i->m have the same effect.

However, the resolution does not provide a formal specification of its behavior. Thus it is implemented differently, including returning nullptr, returning the address of a temporary, or does even provide the member at all. Its intended behavior can hardly be achieved, and it is removed by the resolution of [LWG issue 2790](https://cplusplus.github.io/LWG/issue2790).

The resolution of [LWG issue 659](https://cplusplus.github.io/LWG/issue659) also made the member type pointer unspecified in order to allow operator-> to return a proxy. This is to allow operator-> to compile when CharT is not a class type.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <sstream>
#include <string>
 
int main()
{
    // typical use case: an input stream represented as a pair of iterators
    std::istringstream in{"Hello, world"};
    std::istreambuf_iterator<char> it{in}, end;
    std::string ss{it, end};
    std::cout << "ss has " << ss.size() << " bytes; "
                 "it holds \"" << ss << "\"\n";
 
    // demonstration of the single-pass nature
    std::istringstream s{"abc"};
    std::istreambuf_iterator<char> i1{s}, i2{s};
    std::cout << "i1 returns '" << *i1 << "'\n"
                 "i2 returns '" << *i2 << "'\n";
 
    ++i1;
    std::cout << "after incrementing i1, but not i2:\n"
                 "i1 returns '" << *i1 << "'\n"
                 "i2 returns '" << *i2 << "'\n";
 
    ++i2;
    std::cout << "after incrementing i2, but not i1:\n"
                 "i1 returns '" << *i1 << "'\n"
                 "i2 returns '" << *i2 << "'\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 659 | C++98 | 1. std::istreambuf_iterator did not have operator->2. the member type pointer was specified as CharT* | 1. added2. made unspecified |
| LWG 2790 | C++98 | the operator-> added by LWG issue 659 was not useful | removed |

## See also
- [ostreambuf_iterator](/cpp/iterator/ostreambuf_iterator/)
- [std::basic_streambuf](/cpp/io/basic_streambuf/)
- [istream_iterator](/cpp/iterator/istream_iterator/)
- [std::basic_istream](/cpp/io/basic_istream/)
