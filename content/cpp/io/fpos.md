---
title: "std::fpos"
source_path: "cpp/io/fpos"
header: "<ios>"
category: "io"
---

Specializations of the class template std::fpos identify absolute positions in a stream or in a file. Each object of type fpos holds the byte position in the stream (typically as a private member of type [std::streamoff](/cpp/io/streamoff/)) and the current shift state, a value of type State (typically [std::mbstate_t](/cpp/string/multibyte/mbstate_t/)).

## Declarations
```cpp
template< class State >
class fpos;
```

## Notes
Some of the [I/O streams member functions](/cpp/io/) return and manipulate objects of member typedef pos_type. For streams, these member typedefs are provided by the template parameter Traits, which defaults to [std::char_traits](/cpp/string/char_traits/), which define their pos_types to be specializations of std::fpos. The behavior of the I/O streams library is implementation-defined when Traits::pos_type is not std::fpos<[std::mbstate_t](/cpp/string/multibyte/mbstate_t/)> (aka std::streampos, std::wstreampos, etc.).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 57 | C++98 | streampos and wstreampos were contradictionallyallowed to be different while required to be the same | clarified tobe the same |
| P0759R1 | C++98 | specification was unclear and incomplete | cleaned up |
| P1148R0 | C++11 | unclear what and in which header thedefinitions u16streampos and u32streampos are | made clear |
| LWG 2114(P2167R3) | C++98 | non-bool return types of equality comparisons were allowed | disallowed |

## See also
- [streamoff](/cpp/io/streamoff/)
- [tellp](/cpp/io/basic_ostream/tellp/)
- [seekp](/cpp/io/basic_ostream/seekp/)
- [fgetpos](/cpp/io/c/fgetpos/)
