---
title: "std::basic_streambuf<CharT,Traits>::showmanyc"
source_path: "cpp/io/basic_streambuf/showmanyc"
category: "io"
---

Estimates the number of characters available for input in the associated character sequence. [underflow()](/cpp/io/basic_streambuf/underflow/) is guaranteed not to return Traits::eof() or throw an exception until at least that many characters are extracted.

## Declarations
```cpp
protected:
virtual std::streamsize showmanyc();
```

## Return value
The number of characters that are certainly available in the associated character sequence, or -1 if showmanyc can determine, without blocking, that no characters are available. If showmanyc returns -1, [underflow()](/cpp/io/basic_streambuf/underflow/) and [uflow()](/cpp/io/basic_streambuf/uflow/) will definitely return Traits::eof or throw.

## Notes
The name of this function stands for "stream: how many characters?", so it is pronounced "S how many C", rather than "show many C".

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 159 | C++98 | underflow() is guaranteed not to fail untilat least showmanyc() characters are supplied | extended the guarantee to allow at leastshowmanyc() characters to be extracted |

## See also
- [in_avail](/cpp/io/basic_streambuf/in_avail/)
- [showmanyc](/cpp/io/basic_filebuf/showmanyc/)
