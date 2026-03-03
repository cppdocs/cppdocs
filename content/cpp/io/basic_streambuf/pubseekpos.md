---
title: "std::basic_streambuf<CharT,Traits>::pubseekpos, std::basic_streambuf<CharT,Traits>::seekpos"
source_path: "cpp/io/basic_streambuf/pubseekpos"
category: "io"
---

Sets the position indicator of the input and/or output sequence to an absolute position.

## Declarations
```cpp
pos_type pubseekpos( pos_type pos,
std::ios_base::openmode which = std::ios_base::in | std::ios_base::out );
```

```cpp
protected:
virtual pos_type seekpos( pos_type pos,
std::ios_base::openmode which = std::ios_base::in | std::ios_base::out );
```

## Parameters
- `pos`: absolute position to set the position indicator to
- `which`: defines which of the input and/or output sequences to affect. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 55 | C++98 | the base class version of seekpos returnedan undefined invalid stream position | returns pos_type(off_type(-1)) |

## See also
- [pubseekoff](/cpp/io/basic_streambuf/pubseekoff/)
- [seekpos](/cpp/io/basic_filebuf/seekpos/)
- [seekpos](/cpp/io/basic_stringbuf/seekpos/)
- [seekpos](/cpp/io/strstreambuf/seekpos/)
