---
title: "std::basic_spanbuf<CharT,Traits>::seekpos"
source_path: "cpp/io/basic_spanbuf/seekpos"
category: "io"
since: "C++23"
---

Repositions the next pointer to the get and/or put area, if possible, to the position indicated by sp.

## Declarations
```cpp
protected:
pos_type seekpos( pos_type sp, std::ios_base::openmode which =
std::ios_base::in | std::ios_base::out ) override;
```
_(since C++23)_

## Parameters
- `sp`: stream position, such as one obtained by seekoff() or seekpos()
- `which`: defines whether the input sequences, the output sequence, or both are affected. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
sp on success or pos_type(off_type(-1)) on failure.

## Notes
seekpos() is called by [std::basic_streambuf::pubseekpos()](/cpp/io/basic_streambuf/pubseekpos/), which is called by the single-argument versions of [std::basic_istream::seekg()](/cpp/io/basic_istream/seekg/) and [std::basic_ostream::seekp()](/cpp/io/basic_ostream/seekp/).

## Example
This section is incompleteReason: no example

## See also
- [pubseekpos](/cpp/io/basic_streambuf/pubseekpos/)
- [seekpos](/cpp/io/basic_stringbuf/seekpos/)
- [seekpos](/cpp/io/strstreambuf/seekpos/)
