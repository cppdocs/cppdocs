---
title: "std::basic_spanbuf<CharT,Traits>::seekoff"
source_path: "cpp/io/basic_spanbuf/seekoff"
category: "io"
since: "C++23"
---

Repositions the next pointer to get and/or put area, if possible, to the position that corresponds to exactly off characters from beginning, end, or current position of the get and/or put area of the buffer.

## Declarations
```cpp
protected:
pos_type seekoff( off_type off, std::ios_base::seekdir dir,
std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out ) override;
```
_(since C++23)_

## Parameters
- `off`: relative position to set the next pointer(s) to
- `dir`: defines base position to apply the relative offset to. It can be one of the following constants: Constant Explanation beg the beginning of a stream end the ending of a stream cur the current position of stream position indicator
- `which`: defines whether the input sequences, the output sequence, or both are affected. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
pos_type(newoff) on success, pos_type(off_type(-1)) on failure.

## Example
This section is incompleteReason: no example

## See also
- [seekoff](/cpp/io/basic_stringbuf/seekoff/)
- [seekoff](/cpp/io/strstreambuf/seekoff/)
