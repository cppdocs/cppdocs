---
title: "std::basic_iostream"
source_path: "cpp/io/basic_iostream"
header: "<istream>"
category: "io"
---

The class template basic_iostream provides support for high level input/output operations on streams. The supported operations include sequential reading or writing and formatting. This functionality is implemented over the interface provided by the [std::basic_streambuf](/cpp/io/basic_streambuf/) class. It is accessed through [std::basic_ios](/cpp/io/basic_ios/) class.

## Declarations
```cpp
template<
class CharT,
class Traits = std::char_traits<CharT>
> class basic_iostream :
public basic_istream<CharT, Traits>,
public basic_ostream<CharT, Traits>
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 271 | C++98 | the member types char_type, traits_type, int_type, pos_type and off_type were not defined(std::basic_istream and std::basic_ostream both define these types, resulted in ambiguity) | definethese types |

## See also
- [Input/output manipulators](/cpp/io/manip/)
