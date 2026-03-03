---
title: "std::basic_streambuf<CharT,Traits>::pubseekoff, std::basic_streambuf<CharT,Traits>::seekoff"
source_path: "cpp/io/basic_streambuf/pubseekoff"
category: "io"
---

Sets the position indicator of the input and/or output sequence relative to some other position.

## Declarations
```cpp
pos_type pubseekoff( off_type off, std::ios_base::seekdir dir,
std::ios_base::openmode which = ios_base::in | ios_base::out );
```

```cpp
protected:
virtual pos_type seekoff( off_type off, std::ios_base::seekdir dir,
std::ios_base::openmode which = ios_base::in | ios_base::out );
```

## Parameters
- `off`: relative position to set the position indicator to.
- `dir`: defines base position to apply the relative offset to. It can be one of the following constants: Constant Explanation beg the beginning of a stream end the ending of a stream cur the current position of stream position indicator
- `which`: defines which of the input and/or output sequences to affect. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 55 | C++98 | the base class version of seekoff returnedan undefined invalid stream position | returns pos_type(off_type(-1)) |

## See also
- [pubseekpos](/cpp/io/basic_streambuf/pubseekpos/)
- [seekoff](/cpp/io/basic_filebuf/seekoff/)
- [seekoff](/cpp/io/basic_stringbuf/seekoff/)
- [seekoff](/cpp/io/strstreambuf/seekoff/)
