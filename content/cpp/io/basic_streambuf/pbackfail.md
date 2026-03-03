---
title: "std::basic_streambuf<CharT,Traits>::pbackfail"
source_path: "cpp/io/basic_streambuf/pbackfail"
category: "io"
---

This function can only be called if any of the following condition is satisfied:

## Declarations
```cpp
protected:
virtual int_type pbackfail( int_type c = Traits::eof() );
```

## Parameters
- `ch`: character to put back or Traits::eof() if only back out is requested

## Return value
Traits::eof() in case of failure, some other value to indicate success. The base class version always fails.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 32 | C++98 | the calling condition 'traits::eq(*gptr(),traits::to_char_type(c))returns false' did not match the description of sputbackc() | corrected to matchthe description |

## See also
- [pbackfail](/cpp/io/basic_filebuf/pbackfail/)
- [pbackfail](/cpp/io/basic_stringbuf/pbackfail/)
- [pbackfail](/cpp/io/strstreambuf/pbackfail/)
- [sungetc](/cpp/io/basic_streambuf/sungetc/)
- [sputbackc](/cpp/io/basic_streambuf/sputbackc/)
