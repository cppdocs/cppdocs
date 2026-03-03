---
title: "std::basic_filebuf<CharT,Traits>::close"
source_path: "cpp/io/basic_filebuf/close"
category: "io"
---

If a put area exist (e.g. file was opened for writing), first calls overflow(Traits::eof()) to write all pending output to the file, including any unshift sequences.

## Declarations
```cpp
std::basic_filebuf<CharT, Traits>* close();
```

## Return value
this on success, a null pointer on failure.

## Notes
close() is typically called through the destructor of [std::basic_filebuf](/cpp/io/basic_filebuf/) (which, in turn, is typically called by the destructor of [std::basic_fstream](/cpp/io/basic_fstream/).

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 443 | C++98 | the file was written using overflow(EOF) | changed to overflow(Traits::eof()) |
| LWG 622 | C++98 | it was unclear how to handle theexception thrown during closing | it is rethrown after closing the file |

## See also
- [is_open](/cpp/io/basic_filebuf/is_open/)
- [(destructor)](/cpp/io/basic_filebuf/~basic_filebuf/)
